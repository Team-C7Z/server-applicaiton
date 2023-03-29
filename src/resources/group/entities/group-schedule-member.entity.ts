import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('GROUP_SCHEDULE_MEMBER')
export class GroupScheduleMember {
  @PrimaryGeneratedColumn()
  ID: number; // 모임 일정 멤버 고유값

  @Column()
  GROUP_SCHEDULE_ID: number; // 모임 일정 고유값

  @Column()
  GROUP_SCHEDULE_MEMBER_ID: number; // 모임 일정 회원 고유값

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  CREATED_AT: Date; // 생성 일자

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  UPDATED_AT: Date; // 수정 일자
}
