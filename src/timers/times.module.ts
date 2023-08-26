import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimesService } from './times.service';
import { TimesController } from './times.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 5501,
      username: 'nest',
      password: 'nestpwd',
      database: 'nestdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // En développement seulement, à désactiver en production
    }),
    timesModule,
  ],
  providers: [TimesService],
  controllers: [TimesController],
})
export class timesModule {}
