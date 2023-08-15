import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/users.model';
import { UsersService } from 'src/services/users.service';

@Module({
  providers: [UsersService],
  controllers: [],
  imports: [
    SequelizeModule.forFeature([User])
  ],
  exports: [UsersService]
})
export class ServicesModule {}
