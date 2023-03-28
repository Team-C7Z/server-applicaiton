import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('GROUP_MEMBER')
export class GroupMember {
  @PrimaryGeneratedColumn()
  ID: number; // 모임 회원 고유값

  @Column()
  GROUP_ID: number; // 모임 고유값

  @Column()
  USER_ID: number; // 회원 고유값

  @Column({ length: 1 })
  GROUP_MEMBER_AUTH: string; // 모임 회원 권한 (A: 그룹장, B: 그룹원)

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  CREATED_AT: Date; // 생성 일자

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  UPDATED_AT: Date; // 수정 일자
}
