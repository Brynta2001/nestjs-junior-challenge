import { Controller, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('cash')
  createCashTransaction(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.createCashTransaction(createTransactionDto);
  }
}
