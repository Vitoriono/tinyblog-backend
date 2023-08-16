import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Posts } from 'src/models/posts.model';
import { ServicesModule } from 'src/services/services.module';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
    SequelizeModule.forFeature([Posts]),
    ServicesModule
  ]
})
export class PostsModule {}
