import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('accounts')
export class Account {
  @PrimaryColumn('uuid', { name: 'account_number' })
  accountNumber: string;

  @Column('text', { name: 'user_id' })
  userId: string;

  @Column('numeric')
  balance: number;

  @Column('boolean', { name: 'is_active' })
  isActive: boolean;
}
