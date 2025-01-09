import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryColumn('uuid')
  id: string;

  @Column('text', { name: 'source_account' })
  sourceAccount: string;

  @Column('text', { name: 'destination_account' })
  destinationAccount: string;

  @Column('numeric', { nullable: true })
  amount: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
