import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ReadPostDto } from './dtos/read.post.dto';

@Controller({ path: 'account' })
export class PostsReaderController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  async findAll(): Promise<ReadPostDto[] | undefined> {
    try {
      return this.postService.findAll();
    } catch (error) {
      console.debug(error);
    }
  }

  @Get(':id')
  async getByIdPost(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<ReadPostDto | undefined> {
    try {
      return this.postService.getById(id);
    } catch (error) {
      console.debug(error);
    }
  }
}
