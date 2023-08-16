import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './users.model';

interface PostsCreationAttrs {
  category: string;
  title: string;
  photo: string;
  text: string;
  userId: number;
}

@Table({ tableName: 'post' })
export class Posts extends Model<Posts, PostsCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @Column({
	type: DataType.STRING,
	unique: false,
	allowNull: false,
  })
  category: string;


 @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;


  @Column({ type: DataType.STRING })
  photo: string;


  @Column({ type: DataType.STRING, allowNull: false })
  text: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}