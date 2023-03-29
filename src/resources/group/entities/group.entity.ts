import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('GROUP')
export class Group {
  @PrimaryGeneratedColumn()
  ID: number; // 모임 고유값

  @Column({ length: 10 })
  GROUP_NAME: string; // 모임 이름

  @Column()
  GROUP_REP_USER_ID: number; // 모임 대표 회원 고유값

  @Column({ type: 'text', nullable: true })
  GROUP_REP_IMAGE: string; // 모임 대표 이미지

  @Column({ nullable: true })
  GROUP_PEOPLE_LIMIT: number; // 모임 최대 인원수

  @Column()
  GROUP_CATEGORY_ID: number; // 모임 카테고리 고유값

  @Column({ length: 1, default: 'A' })
  STATUS: string; // 상태 (공개 / 비공개)

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  CREATED_AT: Date; // 생성 일자

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  UPDATED_AT: Date; // 수정 일자
}
