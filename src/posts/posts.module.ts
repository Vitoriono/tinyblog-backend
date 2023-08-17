import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Posts } from 'src/models/posts.model';
import { ServicesModule } from 'src/services/services.module';
import { PostsWriterController } from './posts.writer.controller';
import { PostsReaderController } from './posts.reader.controller';

@Module({
  providers: [PostsService],
  controllers: [PostsWriterController, PostsReaderController],
  imports: [
    SequelizeModule.forFeature([Posts]),
    ServicesModule
  ]
})
export class PostsModule {}
