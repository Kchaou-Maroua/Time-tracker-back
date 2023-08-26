import { Module } from '@nestjs/common';
import { TimesService } from './timers/times.service';
import { TimeRepository } from './timers/times.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Time } from './timers/times.entity';
import { TimesController } from './timers/times.controller';

@Module({
  providers: [TimesService],
  imports: [TypeOrmModule.forFeature([Time, TimeRepository])],
  controllers: [TimesController],
})
export class AppModule {}
