import { IsNotEmpty, IsDateString, IsString, IsOptional, IsNumber, isNotEmpty } from 'class-validator';
import { Client } from "../client.model";
import { Tag } from '../tag.model';
import { User } from '../user.model';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
    @IsNotEmpty()
    client: Client;

    @IsNotEmpty()
    @IsString()
    taskName: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsDateString()
    dueDate: Date;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    assignedTo: User;

    @IsNotEmpty()
    tags: Tag[];
    
}

export class UpdateTaskDto {

    @ApiProperty({ description: 'The task ID' })
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsOptional()
    client?: Client;

    @IsOptional()
    @IsString()
    taskName?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsDateString()
    dueDate?: Date;

    @IsOptional()
    @IsString()
    status?: string;

    @IsOptional()
    assignedTo?: User;

    @IsOptional()
    tags: Tag[];
}
