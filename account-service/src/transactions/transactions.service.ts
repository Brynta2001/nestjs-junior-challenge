import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountsService } from '../accounts/accounts.service';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionsRepository: Repository<Transaction>,

    private readonly accountsService: AccountsService,
  ) {}

  create(createTransactionDto: CreateTransactionDto) {
    const { amount } = createTransactionDto;

    this.accountsService.updateBalance(
      createTransactionDto.sourceAccount,
      -amount,
    );

    this.accountsService.updateBalance(
      createTransactionDto.destinationAccount,
      amount,
    );

    const transaction =
      this.transactionsRepository.create(createTransactionDto);

    return this.transactionsRepository.save(transaction);
  }
}
