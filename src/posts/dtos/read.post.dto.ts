export class ReadPostDto {
  readonly id: number;
  readonly category: string;
  readonly title: string;
  readonly photo: string;
  readonly text: string;
  readonly author: number;
  readonly createdAt: number;
  readonly updatedAt: number;
}
