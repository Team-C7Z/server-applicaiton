import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class GetEmailVerifyDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 6)
  verifyCode: string;
}
