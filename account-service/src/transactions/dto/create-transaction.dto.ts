import { IsNumber, IsUUID } from 'class-validator';

export class CreateTransactionDto {
  @IsUUID()
  id: string;

  @IsUUID()
  sourceAccount: string;

  @IsUUID()
  destinationAccount: string;

  @IsNumber()
  amount: number;
}
