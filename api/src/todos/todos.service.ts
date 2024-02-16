import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly TodoRepository: Repository<Todo>,
  ) {}
  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const newTodo: Todo = new Todo();
    newTodo.title = createTodoDto.title;
    newTodo.description = createTodoDto.description;
    newTodo.status = createTodoDto.status;
    newTodo.createdOn = createTodoDto.createdOn;

    return this.TodoRepository.save(newTodo);
  }

  getAllTodos(): Promise<Todo[]> {
    return this.TodoRepository.find();
  }

  findTodo(id: any): Promise<Todo> {
    const TodoId = id;
    return this.TodoRepository.findOne({
      where: {
        id: TodoId,
      },
    });
  }

  async updateTodo(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    try {
      const TodoExisting = await this.findTodo(id);

      const newUpdatedInfo = {
        ...TodoExisting,
        ...updateTodoDto,
      };

      this.TodoRepository.save(newUpdatedInfo);

      return newUpdatedInfo;
    } catch (error) {
      console.log('error encountered', error);
    }
  }

  async remove(id: number) {
    const findTodo = await this.findTodo(id);

    if (!findTodo) {
      throw new NotFoundException('This todo does not exist!!');
    }

    this.TodoRepository.delete(id);
    return 'successfully deleted the todo';
  }
}
