import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { timesModule } from './Time/times.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'maroua',
      password: 'nestpwd',
      database: 'nestbd',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // En développement seulement, à désactiver en production
    }),
    timesModule,
  ],
  controllers: [],
  providers: [],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
