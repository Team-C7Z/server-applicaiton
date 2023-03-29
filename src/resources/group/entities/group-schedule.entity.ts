import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('GROUP_SCHEDULE')
export class GroupSchedule {
  @PrimaryGeneratedColumn()
  ID: number; // 모임 일정 고유값

  @Column()
  GROUP_ID: number; // 모임 고유값

  @Column({ length: 30 })
  GROUP_SCHEDULE_TITLE: string; // 모임 일정 제목

  @Column({ type: 'datetime' })
  GROUP_SCHEDULE_DATE: Date; // 모임 일정 날짜

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
