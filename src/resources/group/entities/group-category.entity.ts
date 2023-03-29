import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('GROUP_CATEGORY')
export class GroupCategory {
  @PrimaryGeneratedColumn()
  ID: number; // 모임 카테고리 고유값

  @Column({ length: 10 })
  GROUP_CATEGORY_NAME: string; // 모임 카테고리 이름

  @Column({ default: 'Y', length: 1 })
  STATUS: string; // 상태 (Y: 사용가능, N: 사용 불가능)

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  CREATED_AT: Date; // 생성 일자

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  UPDATED_AT: Date; // 수정 일자
}
