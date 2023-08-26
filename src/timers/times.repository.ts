import { Repository, EntityRepository } from 'typeorm';
import { Time } from './times.entity';

@EntityRepository(Time)
export class TimeRepository extends Repository<Time> {}
