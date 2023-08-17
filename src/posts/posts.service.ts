import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from 'src/posts/dtos/create.post.dto';
import { Posts } from 'src/posts/models/posts.model';
import { ReadPostDto } from './dtos/read.post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts) private postRepository: typeof Posts, // private readonly fileService: FilesService,
  ) {}

  async create(dto: CreatePostDto): Promise<ReadPostDto | undefined> {
    try {
      const post = await this.postRepository.create(dto);
      return post;
    } catch (exeption) {
      throw new Error(`create error: ${exeption.message}`);
    }
  }

  async findAll(): Promise<ReadPostDto[] | undefined> {
    try {
      const allPosts = await this.postRepository.findAll();
      return allPosts;
    } catch (exeption) {
      throw new Error(`findAll error: ${exeption.message}`);
    }
  }

  async getById(id: number): Promise<ReadPostDto | undefined> {
    if (!id) throw new Error(`Post with this id is not exist!`);
    try {
      const onePost = await this.postRepository.findByPk(id);
      return onePost;
    } catch (exeption) {
      throw new Error(`getById error: ${exeption.message}!`);
    }
  }

  async deleteById(id: number): Promise<void> {
    if (!id) throw new Error(`Post with this id is not exist!`);
    try {
      await this.postRepository.destroy({
        where: { id: id },
        force: true,
      });
    } catch (exeption) {
      throw new Error(`deleteById error: ${exeption.message}!`);
    }
  }
}
