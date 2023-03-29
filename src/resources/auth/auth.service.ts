import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
  constructor(private readonly mailerService: MailerService) {}

  async kakaoLogin(user) {
    const { kakaoId, email } = user;

    /**
     * TODO: kakaoId로 DB에 해당 회원이 등록이 되어있는지 확인
     * - 등록되어 있음: 로그인 진행
     * - 등록되어 있지 않음: 신규회원 -> 회원가입 API로 넘김?
     */

    return;
  }

  async sendEmailVerifyNumber(email: string) {
    const emailVerifyNumber = Math.floor(Math.random() * 1000000); // 6자리 난수 생성

    await this.mailerService.sendMail({
      to: email, // 이메일 받는 사람의 주소
      from: 'noreply@c7z.com', // 이메일 보내는 사람의 주소 (서버의 이메일 주소?)
      subject: '[C7Z] 회원가입 이메일 인증번호 보내드립니다.', // 이메일 제목
      template: './email-template', // 사용할 템플릿 파일 이름,
      context: {
        // template 파일에 보낼 변수 설정
        emailVerifyNumber,
      },
    });
  }
}
