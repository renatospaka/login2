import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    // type: process.env.TYPEORM_CONNECTION as any,
    // host: process.env.TYPEORM_HOST,
    // port: parseInt(process.env.TYPEORM_PORT),
    // username: process.env.TYPEORM_USERNAME,
    // password: process.env.TYPEORM_PASSWORD,
    // database: process.env.TYPEORM_DATABASE,
    type: "postgres" as any,
    host: "db",
    port: 6501,
    username: "postgres",
    password: "rtm",
    database: "rtm-poc",
    entities: []
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
