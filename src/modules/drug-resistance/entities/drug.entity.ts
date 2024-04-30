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
  name: 'drug',
})
export class Drug {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'DrugBank',
  })
  drug_bank: string | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: 'GDSC ID',
  })
  drug_gdsc: number | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'Dresis ID',
  })
  drug_dresis: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'PubChem',
  })
  pub_chem: string | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: 'chEBI',
  })
  ch_ebi: number | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: 'CheMBL',
  })
  che_mbl: number | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: 'SMILES',
  })
  smiles: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '药物名',
  })
  name: string | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: '同义词',
  })
  synonyms: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '适应症',
  })
  indication_name: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '药物类型',
  })
  drug_type: string | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: '是否撤回 1表示撤回，0表示未撤回',
  })
  has_been_withdrawn: number | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: '是否批准 1表示批准，0表示未批准',
  })
  is_approved: number | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: '首次批准年份',
  })
  year_of_first_approval: number | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: '临床试验阶段',
  })
  maximum_clinical_trial_phase: number | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: '商品名',
  })
  trade_names: string | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: '药物描述',
  })
  description: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'GDSC通路名',
  })
  pathway_gdsc: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'GDSC靶点名',
  })
  target_gdsc: string | null;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;

  // @JoinTable()
  // @ManyToMany(() => CellLine, (cellLine) => cellLine.drug_gdsc)
  // cellLines: CellLine[];

  // @OneToMany(() => Gene, (gene) => gene.drug_dresis)
  // genes: Relation<Gene[]>;

  // @OneToMany(() => Protein, (protein) => protein.drug_dresis)
  // proteins: Relation<Protein[]>;

  // @OneToMany(() => Pathway, (pathway) => pathway.drug_dresis)
  // pathways: Relation<Pathway[]>;
}
