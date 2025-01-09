import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsOptional()
  sourceAccount?: string;

  @IsString()
  destinationAccount: string;

  @IsNumber()
  amount: number;
}
