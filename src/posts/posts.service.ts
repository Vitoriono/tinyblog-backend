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

	async create(dto: CreatePostDto, photo: any){
		const fileName = await this.fileService.createFile(photo);
		const post = await this.postRepository.create({...dto, photo: fileName});
		return post; 
	}
}
