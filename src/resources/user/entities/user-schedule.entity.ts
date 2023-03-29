import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USER_SCHEDULE')
export class UserSchedule {
  @PrimaryGeneratedColumn()
  ID: number; // 회원 일정 고유값

  @Column()
  USER_ID: number; // 회원 고유값

  @Column({ length: 30 })
  USER_SCHEDULE_TITLE: string; // 회원 일정 제목

  @Column({ type: 'datetime' })
  USER_SCHEDULE_DATE: Date; // 회원 일정 날짜

  @Column({ default: 'N', length: 1 })
  STATUS: string; // 상태 (N: NEW, E: END)

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  CREATED_AT: Date; // 생성 일자

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  UPDATED_AT: Date; // 수정 일자
}
