import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from 'src/dtos/create-post.dto';
import { Posts } from 'src/models/posts.model';
import { FilesService } from 'src/services/file.service';

@Injectable()
export class PostsService {
	constructor(
		@InjectModel(Posts) private postRepository: typeof Posts,
		private readonly fileService: FilesService
	){}

	async create(dto: CreatePostDto){
		const post = await this.postRepository.create(dto);
		return post;
	}

	async findAll(){
		const allPosts = await this.postRepository.findAll()
		return allPosts;
	}

	async getById(id: number){
		const onePost = await this.postRepository.findByPk(id);
		return onePost;
	}
}
