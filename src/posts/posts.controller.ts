import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from 'src/dtos/create-post.dto';
import { PostsService } from './posts.service';

@Controller({ path: 'account' })
export class PostsController {
	constructor(private readonly postService: PostsService){}

	@Post('dashboard')
	@UseInterceptors(FileInterceptor('photo'))
	createPost(@Body() dto: CreatePostDto, @UploadedFile() photo){
		return this.postService.create(dto, photo);
	}
}
