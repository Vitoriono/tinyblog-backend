import { Body, Controller, Post} from '@nestjs/common';
import { CreatePostDto } from 'src/dtos/create-post.dto';
import { PostsService } from './posts.service';

@Controller({ path: 'account' })
export class PostsWriterController {
	constructor(private readonly postService: PostsService){}

	@Post('dashboard')
	createPost(@Body() dto: CreatePostDto){
		return this.postService.create(dto);
	}
}
