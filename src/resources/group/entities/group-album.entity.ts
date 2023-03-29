import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('GROUP_ALBUM')
export class GroupAlbum {
  @PrimaryGeneratedColumn()
  ID: number; // 모임 앨범 고유값

  @Column()
  GROUP_ID: number; // 모임 고유값

  @Column()
  GROUP_SCHEDULE_ID: number; // 모임 일정 고유값

  @Column({ type: 'text' })
  GROUP_ALBUM_IMAGE: string; // 모임 앨범 사진

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  CREATED_AT: Date; // 생성 일자

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  UPDATED_AT: Date; // 수정 일자
}
