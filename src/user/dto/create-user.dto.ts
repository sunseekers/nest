import { IsString, Length } from 'class-validator';
export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @Length(0, 45)
  account: string;
}
