/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class time {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  startTime: Date;

    @Column({ type: 'timestamp', nullable: true })
  endTime: Date;
  
  @Column()
  name: string;
}
