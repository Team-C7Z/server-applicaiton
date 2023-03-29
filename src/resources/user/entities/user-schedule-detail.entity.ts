import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USER_SCHEDULE_DETAIL')
export class UserScheduleDetail {
  @PrimaryGeneratedColumn()
  ID: number; // 회원 일정 세부내용 고유값

  @Column()
  USER_SCHEDULE_ID: number; // 회원 일정 고유값

  @Column({ type: 'double' })
  USER_SCHEDULE_AREA_LATITUDE: number; // 회원 일정 장소 위도

  @Column({ type: 'double' })
  USER_SCHEDULE_AREA_LONGITUDE: number; // 회원 일정 장소 경도

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  CREATED_AT: Date; // 생성 일자

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  UPDATED_AT: Date; // 수정 일자
}
