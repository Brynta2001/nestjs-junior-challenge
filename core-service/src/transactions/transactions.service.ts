import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { getAxiosInstance } from 'src/utils/axios';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  private axiosInstance = getAxiosInstance(process.env.ACCOUNTS_API_URL);

  async createCashTransaction(createTransactionDto: CreateTransactionDto) {
    const { destinationAccount, amount } = createTransactionDto;

    const transaction = this.transactionRepository.create({
      sourceAccount: 'CASH',
      destinationAccount,
      amount,
      state: 'PENDING',
    });

    // Check if the destination account exists
    const accountExists = await this.validateAccountExists(destinationAccount);

    if (!accountExists) {
      transaction.state = 'FAILED';
      await this.transactionRepository.save(transaction);
      throw new NotFoundException('Destination account does not exist');
    }

    // Check if the account state is active
    const accountState = await this.validateAccountState(destinationAccount);
    if (!accountState) {
      transaction.state = 'FAILED';
      await this.transactionRepository.save(transaction);
      throw new Error('Destination account is not active');
    }

    // Update the transaction state to approved
    transaction.state = 'APPROVED';
    await this.transactionRepository.save(transaction);
    const transactionResp = await this.createTransaction(transaction);

    return {
      message: 'Transaction successful',
      transaction: transactionResp,
    };
  }

  async validateAccountExists(accountNumber: string) {
    const accountExistsResp = await this.axiosInstance.post(
      '/accounts/validate-account',
      {
        accountNumber,
      },
    );

    return accountExistsResp.data;
  }

  async validateAccountState(accountNumber: string) {
    const accountStateResp = await this.axiosInstance.post(
      '/accounts/validate-account-state',
      {
        accountNumber,
      },
    );

    return accountStateResp.data;
  }

  async createTransaction(transaction: Transaction) {
    const transactionResp = await this.axiosInstance.post('/transactions', {
      id: transaction.id,
      sourceAccount: transaction.sourceAccount,
      destinationAccount: transaction.destinationAccount,
      amount: transaction.amount,
    });

    return transactionResp.data;
  }
}
