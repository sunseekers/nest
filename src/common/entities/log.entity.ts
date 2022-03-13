import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('log', { schema: 'sunseekers' })
export class Log {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;
  @Column({ type: 'varchar', name: 'content' })
  content: string;
}
