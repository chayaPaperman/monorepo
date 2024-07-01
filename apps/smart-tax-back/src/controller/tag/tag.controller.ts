
import { Controller, Get, Post, Put, Delete, Body, NotFoundException, UseFilters, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from '../../common/filters/http-exception.filter'; 
import { Client } from 'src/Models/client.model';
import { CreateClientDto, UpdateClientDto } from 'src/Models/dto/client.dto';
import { ClientService } from 'src/services/client.service';
import {  ApiOperation ,ApiBody, ApiProperty, ApiTags} from '@nestjs/swagger';
import { TagService } from 'src/services/tag.service';
import { CreateTagDto, UpdateTagDto } from 'src/Models/dto/tag.dto';
import { Tag } from 'src/Models/tag.model';

@ApiTags('tags')
@Controller('tags')
@UseFilters(HttpExceptionFilter) 
export class TagController {

    constructor(private readonly tagService: TagService) { }

    @Post()
    async createTag(@Body(new ValidationPipe()) createClientDto: CreateTagDto): Promise<Tag> {
        return await this.tagService.createTag(createClientDto);
    }

    @Get()
    async getAllTags(): Promise<Tag[]> {
        return await this.tagService.getAllTags();
    }
    @ApiBody({ schema: { type: 'object', properties: { id: { type: 'string' } } } })
    @Post('searchTag')
    async searchTag(@Body(new ValidationPipe())  body:{"id":string}): Promise<Tag[]> {
        return await this.tagService.searchTag(body.id);
    }
    @Put()
    async updateTag(@Body(new ValidationPipe()) updateTagDto: UpdateTagDto): Promise<Tag> {
        return await this.tagService.updateTag(updateTagDto);
    }
    @ApiBody({ schema: { type: 'object', properties: { id: { type: 'string' } } } })
    @Delete()
    async deleteTag(@Body(new ValidationPipe()) id:{"id":string}): Promise<boolean> {
        return await this.tagService.deleteTag(id.id);
    }
}
