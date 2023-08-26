import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Time } from './times.entity';

@Injectable()
export class TimesService {
  constructor(
    @InjectRepository(Time)
    private readonly timeRepository: Repository<Time>,
  ) {}

  async findAll(): Promise<Time[]> {
    return this.timeRepository.find();
  }

  async findOne(id: number): Promise<Time> {
    const time = await this.findOne(id);
    if (!time) {
      throw new NotFoundException(
        `Le chronomètre avec l'ID ${id} n'a pas été trouvé.`,
      );
    }
    return time;
  }

  async create(data: Partial<Time>): Promise<Time> {
    const time = this.timeRepository.create(data);
    return this.timeRepository.save(time);
  }

  async update(id: number, data: Partial<Time>): Promise<Time> {
    const existingTime = await this.findOne(id);
    if (!existingTime) {
      throw new NotFoundException(
        `Le chronomètre avec l'ID ${id} n'a pas été trouvé.`,
      );
    }
    this.timeRepository.merge(existingTime, data);
    return this.timeRepository.save(existingTime);
  }

  async remove(id: number): Promise<void> {
    const time = await this.findOne(id);
    if (!time) {
      throw new NotFoundException(
        `Le chronomètre avec l'ID ${id} n'a pas été trouvé.`,
      );
    }
    await this.timeRepository.remove(time);
  }
}
