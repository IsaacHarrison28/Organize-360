import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TodoStatus } from '../enums/todo-status-enum';

export class CreateTodoDto {
  @IsString({ message: 'Your title cannot be anything but a string' })
  @IsNotEmpty({ message: 'Please provide a title for your todo' })
  title: string;

  @IsString({ message: 'Your description cannot be anything but a string' })
  description: string;

  @IsEnum(TodoStatus)
  status: TodoStatus;

  //remember to build a custom validation function to conform with postgresql formats of dates
  createdOn: Date;
}
