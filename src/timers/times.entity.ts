import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;
}
