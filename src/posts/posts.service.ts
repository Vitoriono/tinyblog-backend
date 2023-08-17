import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from 'src/posts/dtos/create.post.dto';
import { Posts } from 'src/posts/models/posts.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts) private postRepository: typeof Posts, // private readonly fileService: FilesService,
  ) {}

  async create(dto: CreatePostDto) {
    const post = await this.postRepository.create(dto);
    return post;
  }

  async findAll() {
    const allPosts = await this.postRepository.findAll();
    return allPosts;
  }

  async getById(id: number) {
    const onePost = await this.postRepository.findByPk(id);
    return onePost;
  }

  async deleteById(id: number): Promise<void> {
    if (!id) throw new Error(`Post with this id is not exist!`);
    try {
      await this.postRepository.destroy({
        where: { id: id },
        force: true,
      });
    } catch (exeption) {
      throw new Error(`Remove error: ${exeption.message}!`);
    }
  }
}
