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

@Controller({ path: 'account' })
export class PostsWriterController {
  constructor(private readonly postService: PostsService) {}

  @Post('dashboard')
  createPost(@Body() dto: CreatePostDto) {
    return this.postService.create(dto);
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
