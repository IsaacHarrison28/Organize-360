import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
