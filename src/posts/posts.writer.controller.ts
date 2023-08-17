import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreatePostDto } from 'src/posts/dtos/create.post.dto';
import { PostsService } from './posts.service';
import { ReadPostDto } from './dtos/read.post.dto';

@Controller({ path: 'account' })
export class PostsWriterController {
  constructor(private readonly postService: PostsService) {}

  @Post('dashboard')
  async createPost(
    @Body() dto: CreatePostDto,
  ): Promise<ReadPostDto | undefined> {
    try {
      return this.postService.create(dto);
    } catch (error) {
      console.debug(error);
    }
  }

  @Delete(':id')
  async deleteById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<boolean> {
    try {
      this.postService.deleteById(id);
      return true;
    } catch (error) {
      console.debug(error);
      return false;
    }
  }
}
