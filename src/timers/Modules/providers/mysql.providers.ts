import { createConnection } from 'typeorm';

export const MysqlProviders = [
  {
    provide: `DATABASE_CONNECTION`,
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3000,
        username: 'nest',
        password: 'nestpwd',
        database: 'nestdb',
        entities: ['dist/**/**.entity.js', 'src/**/**.entity.ts'],
        synchronize: true,
        dropSchema: false,
      }),
  },
];
