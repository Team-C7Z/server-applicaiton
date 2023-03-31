import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class GetEmailVerifyDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  @Min(100000)
  @Max(999999)
  readonly verifyCode: number;
}
