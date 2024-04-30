import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  // JoinTable,
  // ManyToMany,
  // OneToMany,
} from 'typeorm';
// import type { Relation } from 'typeorm';

// import { CellLine } from './cell-line.entity';
// import { Gene } from './gene.entity';
// import { Protein } from './protein.entity';
// import { Pathway } from './pathway.entity';

@Entity({
  name: 'disease',
})
export class Disease {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'GDSC肿瘤缩写',
  })
  gdsc: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'MeSH ID',
  })
  mesh: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'KEGG',
  })
  kegg: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '简要ICD11',
  })
  icd11: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'ICD11',
  })
  icd11_detail: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'ICD10',
  })
  icd10: string | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: 'OMIM',
  })
  omim: number | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'Dresis ID',
  })
  dis_dresis: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'Dresis名称',
  })
  dresis_name: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'KEGG名称',
  })
  kegg_name: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'GDSC名称',
  })
  gdsc_desc: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'MeSH',
  })
  mesh_heading: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'MeSH主题词',
  })
  mesh_heading_zh: string | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: '同义词（英文）',
  })
  mesh_entry_term: string | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: '同义词',
  })
  mesh_entry_term_zh: string | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: '疾病描述',
  })
  description: string | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: 'MeSH解释（英文）',
  })
  mesh_scope_note: string | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: 'MeSH中文解释',
  })
  mesh_scope_note_zh: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'MeSH树状号',
  })
  mesh_tree_number: string | null;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;

  // @JoinTable()
  // @ManyToMany(() => CellLine, (cellLine) => cellLine.gdsc)
  // cellLines: CellLine[];

  // @OneToMany(() => Gene, (gene) => gene.dis_dresis)
  // genes: Relation<Gene[]>;

  // @OneToMany(() => Protein, (protein) => protein.dis_dresis)
  // proteins: Relation<Protein[]>;

  // @OneToMany(() => Pathway, (pathway) => pathway.dis_dresis)
  // pathways: Relation<Pathway[]>;
}
