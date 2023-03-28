import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('GROUP_SCHEDULE_DETAIL')
export class GroupScheduleDetail {
  @PrimaryGeneratedColumn()
  ID: number; // 모임 일정 세부내용 고유값

  @Column()
  GROUP_SCHEDULE_ID: number; // 모임 일정 고유값

  @Column({ type: 'double' })
  GROUP_SCHEDULE_AREA_LATITUDE: number; // 모임 일정 장소 위도

  @Column({ type: 'double' })
  GROUP_SCHEDULE_AREA_LONGITUDE: number; // 모임 일정 장소 경도

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  CREATED_AT: Date; // 생성 일자

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  UPDATED_AT: Date; // 수정 일자
}
