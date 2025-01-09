import { Injectable } from '@nestjs/common';
import { ValidateAccountDto } from './dto/validate-account.dto';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private readonly accountsRepository: Repository<Account>,
  ) {}

  async validateState(validateAccountDto: ValidateAccountDto) {
    const { accountNumber } = validateAccountDto;

    const account = await this.accountsRepository.findOneBy({ accountNumber });

    return {
      isActive: account.isActive,
      message: account.isActive ? 'Account is active' : 'Account is inactive',
    };
  }

  async validateAccount(validateAccountDto: ValidateAccountDto) {
    const { accountNumber } = validateAccountDto;

    const account = await this.accountsRepository.existsBy({ accountNumber });

    return {
      exists: account ? true : false,
      message: account ? 'Account exists' : 'Account does not exist',
    };
  }

  async findOne(accountNumber: string) {
    const account = await this.accountsRepository.findOneBy({ accountNumber });

    if (!account) {
      throw new Error('Account not found');
    }

    return account;
  }

  async updateBalance(accountNumber: string, amount: number) {
    const account = await this.findOne(accountNumber);

    account.balance = account.balance + amount;

    await this.accountsRepository.save(account);

    return account;
  }
}
