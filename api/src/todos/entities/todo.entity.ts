import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TodoStatus } from '../enums/todo-status-enum';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
    type: 'boolean',
  })
  completed: boolean;

  @Column({
    type: 'date',
  })
  createdOn: Date;
}
