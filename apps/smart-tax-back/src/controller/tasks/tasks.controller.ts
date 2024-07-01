import { Body, Controller, HttpException, HttpStatus, Post, UseFilters , Get, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto, UpdateTaskDto } from 'src/Models/dto/task.dto';
import { Task } from 'src/Models/task.model';
import { ValidationException } from 'src/common/exceptions/validation.exception';
import { HttpErrorFilter } from 'src/common/filters/http-error.filter';
import { hashPasswordService } from 'src/services/hash-password';
import { TokenService } from 'src/services/jwt.service';
import { TaskService } from 'src/services/task.service';

@ApiTags('tasks')
@UseFilters(HttpErrorFilter) 
@UseFilters(ValidationException)
@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TaskService, private jwtToken: TokenService, private hashService: hashPasswordService) { }

  @Post('create')
  @ApiOperation({ summary: 'Create a new task' })
  @ApiBody({ type: CreateTaskDto })
  async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    try {
    //   createUserDto.passwordHash = await this.hashService.hashPassword(createUserDto.passwordHash);
      const newTask = await this.taskService.createTask(createTaskDto);
      return newTask;
    } catch (error) {
        console.log(error);
      throw new HttpException(
        'Failed to create task',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
      
    }
  }

  @Get('findAll')
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  async findAll(): Promise<Task[]> {
    try {
      const tasks = await this.taskService.findAll();
      return tasks;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch tasks',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('findOne')
  @ApiOperation({ summary: 'Get a user by ID' })
//   @ApiQuery({ name: 'id', required: true, description: 'The ID of the user to find' })
  @ApiResponse({ status: 200, description: 'Return the user.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async findOne(@Param('id') id: string): Promise<Task> {
    
    try {
      const task = await this.taskService.findOne(id);
      if (!task) {
        throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
      }
      return task;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch task',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put('update')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiBody({ type: UpdateTaskDto })
  async update(@Param()id:string,@Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
    try {
    //   updateUserDto.passwordHash = await this.hashService.hashPassword(updateUserDto.passwordHash);
      const updateTask = await this.taskService.updateTask(id, updateTaskDto);
      if (!updateTask) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return updateTask;
    } catch (error) {
      throw new HttpException(
        'Failed to update task',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete('delete')
  @ApiOperation({ summary: 'Delete a user by ID' })
//   @ApiQuery({ name: 'id', required: true, description: 'The ID of the user to find' })
  async delete(@Param('id') id: string): Promise<Task> {
   
    try {
      const deletedUser = await this.taskService.deleteTask(id);
      if (!deletedUser) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return deletedUser;
    } catch (error) {
      throw new HttpException(
        'Failed to delete user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  }

