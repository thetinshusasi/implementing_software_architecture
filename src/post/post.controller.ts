import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostEntity } from '../models/post/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AppService } from 'src/app.service';

@Controller('/posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly appService: AppService,
  ) {}

  @Get('/')
  findAll(): Promise<PostEntity[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PostEntity> {
    return this.postService.findOne(id);
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postService.create(createPostDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<PostEntity> {
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.postService.delete(id);
  }
}
