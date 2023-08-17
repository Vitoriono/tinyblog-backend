import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface PostsCreationAttrs {
  category: string;
  title: string;
  photo: string;
  text: string;
  author: number;
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

  @Column({ type: DataType.TEXT })
  photo: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  text: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  author: string;
}
