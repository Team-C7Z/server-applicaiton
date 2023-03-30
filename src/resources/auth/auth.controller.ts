import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Passport를 통한 카카오 소셜 로그인
   * - 클라이언트가 /auth/kakao-login으로 카카오 로그인 API 요청
   * - 해당 요청은 /auth/kakao-login/callback으로 redirect
   * - 이후 비즈니스 로직 진행 (유저 엔티티 확인 후 회원가입 or 로그인)
   */
  @Get('/kakao-login')
  @UseGuards(AuthGuard('kakao'))
  async kakaoLogin() {
    return HttpStatus.OK;
  }

  @Get('/kakao-login/callback')
  @UseGuards(AuthGuard('kakao'))
  async kakaoLoginCallback(@Req() req) {
    console.log(req.user); // strategy의 validate 함수에서 done을 통해 넘겨온 객체
    return this.authService.kakaoLogin(req.user);
  }

  /**
   * 이메일 인증번호 전송
   * - NodeEmailer를 통해 이메일 인증번호 전송
   * - Redis에 해당 인증번호 저장
   */
  @Post('/email-verify')
  @HttpCode(HttpStatus.CREATED)
  async sendEmailVerifyNumber(@Body('email') email: string): Promise<boolean> {
    return await this.authService.sendEmailVerifyNumber(email);
  }
}
