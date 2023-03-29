import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USER')
export class User {
  @PrimaryGeneratedColumn()
  ID: number; // 회원 고유값

  @Column({ length: 50 })
  USER_SNS_ID: string; // 회원 소셜로그인 고유값

  @Column({ length: 100 })
  USER_EMAIL: string; // 회원 이메일

  @Column({ length: 10 })
  USER_NICKNAME: string; // 회원 닉네임

  @Column({ type: 'text', nullable: true })
  USER_PROFILE_IMAGE: string; // 회원 프로필 사진

  @Column({ default: 'A', length: 1 })
  STATUS: string; // 상태 (로그인, 로그아웃, 탈퇴?)

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  CREATED_AT: Date; // 생성 일자

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  UPDATED_AT: Date; // 수정 일자
}
