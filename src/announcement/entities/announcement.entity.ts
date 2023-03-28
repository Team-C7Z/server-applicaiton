import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ANNOUNCEMENT')
export class Announcement {
  @PrimaryGeneratedColumn()
  ID: number; // 공지사항 고유값

  @Column()
  ANNOUNCEMENT_WRITER_ID: number; // 공지사항 작성자 고유값 (수정 필요)

  @Column({ length: 50 })
  ANNOUNCEMENT_TITLE: string; // 공지사항 제목

  @Column({ length: 255, nullable: true })
  ANNOUNCEMENT_CONTENT: string; // 공지사항 내용

  @Column({ default: 'A', length: 1 })
  STATUS: string; // 상태 (공개, 비공개, 수정됨)

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  CREATED_AT: Date; // 생성 일자

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  UPDATED_AT: Date; // 수정 일자
}
