import { Body, Controller, Get, Query} from '@nestjs/common';
import { CreatePostDto } from 'src/dtos/create-post.dto';
import { PostsService } from './posts.service';

@Controller({ path: 'account' })
export class PostsReaderController {
	constructor(private readonly postService: PostsService){}

	@Get()
	findAll(){
		return this.postService.findAll();
	}
}