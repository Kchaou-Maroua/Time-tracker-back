/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { timesService } from './times.service';

@Module({
  providers: [timesService]
})
export class timesModule {}
