import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/users.model';
import { UsersService } from 'src/services/users.service';
import { FilesService } from './file.service';

@Module({
  providers: [UsersService, FilesService],
  controllers: [],
  imports: [
    SequelizeModule.forFeature([User])
  ],
  exports: [UsersService, FilesService]
})
export class ServicesModule {}
