
import { Controller, Post, Body, HttpException, HttpStatus, Get, Delete, Put, Query, UseFilters, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiQuery, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from '../../services/user.service';
import { CreateUserDto, UpdateUserDto } from '../../Models/dto/user.dto';
import { User } from '../../Models/user.model';
import { HttpErrorFilter } from '../../common/filters/http-error.filter';

import { TokenService } from 'src/services/jwt.service';
import { equals } from 'class-validator';
import { hashPasswordService } from 'src/services/hash-password';
import { ValidationException } from 'src/common/exceptions/validation.exception';

@ApiTags('users')
@Controller('users')
@UseFilters(HttpErrorFilter)
//@UseFilters(ValidationException)
export class UserController {
 
  constructor(private readonly userService: UserService, private jwtToken: TokenService, private hashService: hashPasswordService) { }

  @Put('create')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    console.log("hello");
    
    try {
      createUserDto.passwordHash = await this.hashService.hashPassword(createUserDto.passwordHash);
      const newUser = await this.userService.createUser(createUserDto);
      return newUser;
    } catch (error) {
      throw new HttpException(
        'Failed to create user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
      console.log(error);

      throw new HttpException('Failed to create user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('findAll')
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  async findAll(): Promise<User[]> {
    try {
      const users = await this.userService.findAll();
      return users;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch users',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('findOne')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiQuery({ name: 'id', required: true, description: 'The ID of the user to find' })
  @ApiResponse({ status: 200, description: 'Return the user.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async findOne(@Query('id') id: string): Promise<User> {

    try {
      const user = await this.userService.findOne(id);
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return user;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('findByEmail')
  @ApiOperation({ summary: 'Get a user by email' })
  @ApiQuery({ name: 'email', required: true, description: 'The email of the user to find' })
  @ApiResponse({ status: 200, description: 'Return the user.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async findByEmail(@Query('email') email: string): Promise<User> {

    try {
      const user = await this.userService.findByEmail(email);
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return user;
    } catch (error) {
      throw new HttpException('Failed to fetch user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('update')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiBody({ type: UpdateUserDto })
  async update(@Body() updateUserDto: UpdateUserDto): Promise<User> {
    try {
      updateUserDto.passwordHash = await this.hashService.hashPassword(updateUserDto.passwordHash);
      const updatedUser = await this.userService.updateUser(updateUserDto.id, updateUserDto);
      if (!updatedUser) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return updatedUser;
    } catch (error) {
      throw new HttpException(
        'Failed to update user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete('delete')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiQuery({ name: 'id', required: true, description: 'The ID of the user to find' })
  async delete(@Query('id') id: string): Promise<User> {

    try {
      const deletedUser = await this.userService.deleteUser(id);
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

