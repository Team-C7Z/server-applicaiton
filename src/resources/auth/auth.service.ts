import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CachingService } from '../caching/caching.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
    private readonly cacheManager: CachingService,
  ) {}

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
    const emailVerifyNumber = Math.floor(Math.random() * 999999) + 100000; // 6자리 난수 생성 (100000 ~ 999999)

    /**
     * Cache에 해당 코드가 저장이 되면 -> 이메일에 인증코드를 보내고 싶음.
     * 한곳에서라도 에러 발생하면 해당 로직들이 실행되지 않게 하고싶음.
     * 하지만 await - await 구조를 사용하고 싶지는 않음. (물론 사용해도 괜찮지만)
     * Promise.all을 사용해보고 싶은데 이 상황을 어떻게 해결?
     */

    // 이메일 인증코드 Cache에 저장하는 함수
    const setEmailVerifyCode = async (email: string): Promise<void> => {
      this.cacheManager.set(`VC:${email}`, emailVerifyNumber, 60 * 60 * 3);
    };

    // 사용자 이메일에 인증코드 보내는 함수
    const sendEmail = async (verifyCode: number): Promise<void> => {
      this.mailerService.sendMail({
        to: email, // 이메일 받는 사람의 주소
        from: this.configService.get<string>('MAIL_ADDRESS'), // 이메일 보내는 사람의 주소 (서버의 이메일 주소?)
        subject: '[C7Z] 회원가입 이메일 인증번호 보내드립니다.', // 이메일 제목
        template: './email-template', // 사용할 템플릿 파일 이름,
        context: {
          // template 파일에 보낼 변수 설정
          emailVerifyNumber: verifyCode,
        },
      });
    };

    await Promise.all([
      setEmailVerifyCode(email),
      sendEmail(emailVerifyNumber),
    ]);
  }

  async checkEmailVerifyNumber(email: string, verifyNumber: number) {
    const verifyCodeFromCache = await this.cacheManager.get(`VC:${email}`);
    return verifyCodeFromCache === verifyNumber;
  }
}
