import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { name: 'source_account' })
  sourceAccount: string;

  @Column('text', { name: 'destination_account' })
  destinationAccount: string;

  @Column('numeric')
  amount: number;

  @Column('text')
  state: string;
}
