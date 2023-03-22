import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get<string>('KAKAO_CLIENT_ID'),
      callbackURL: configService.get<string>('KAKAO_CALLBACK_URL'),
    });
  }

  async validate(accessToken, refreshToken, profile, done) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);

    // TODO: 카카오에서 정확히 어떤 정보들을 가져올건지 판단 후에 객체 생성해서 done 메서드로 service로 전달
    // 현재는 카카오 고유값과 이메일만!
    const profileJson = profile._json;
    const kakaoAccount = profileJson.kakao_account;
    const user = {
      kakaoId: profileJson.kakaoId,
      email:
        kakaoAccount.has_email && !kakaoAccount.email_needs_agreement
          ? kakaoAccount.email
          : null,
    };

    done(null, user);
  }
}
