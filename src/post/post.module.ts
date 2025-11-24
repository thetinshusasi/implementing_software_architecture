import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostEntity } from '../models/post/post.entity';
import { SharedModule } from 'src/shared/shared.module';
import { AppService } from 'src/app.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
    SharedModule,
  ],
  controllers: [PostController],
  providers: [PostService, AppService],
})
export class PostModule { }
