import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async kakaoLogin(user) {
    const { kakaoId, email } = user;

    /**
     * TODO: kakaoId로 DB에 해당 회원이 등록이 되어있는지 확인
     * - 등록되어 있음: 로그인 진행
     * - 등록되어 있지 않음: 신규회원 -> 회원가입 API로 넘김?
     */

    return;
  }
}
