export class ReadUserDto {
  token: string;
  payload: {
    id: number;
    name: string;
    login: string;
    email: string;
  };
}
