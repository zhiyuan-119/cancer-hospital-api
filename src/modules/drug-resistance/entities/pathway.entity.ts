import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  // ManyToOne,
} from 'typeorm';
// import type { Relation } from 'typeorm';

// import { Drug } from './drug.entity';
// import { Disease } from './disease.entity';

@Entity({
  name: 'pathway',
})
export class Pathway {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '关联ID号 DRESIS关联ID',
  })
  pair_id: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '关联药物',
  })
  drug_dresis: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '关联疾病',
  })
  dis_dresis: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '通路名',
  })
  name: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'KEGG',
  })
  kegg: string | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: '耐药分类',
  })
  molecule_pattern_type: string | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: '耐药原理',
  })
  molecule_pattern: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '通路状态',
  })
  sign: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '测量方法',
  })
  molecule_method: string | null;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;

  // @ManyToOne(() => Drug)
  // drug: Relation<Drug>;

  // @ManyToOne(() => Disease)
  // disease: Relation<Disease>;
}
