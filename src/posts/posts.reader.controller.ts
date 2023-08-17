import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller({ path: 'account' })
export class PostsReaderController {
	constructor(private readonly postService: PostsService){}

	@Get()
	findAll(){
		return this.postService.findAll();
	}

	@Get(':id')
	getByIdPost(@Param('id', new ParseIntPipe()) id: number){
		return this.postService.getById(id);
	}
}