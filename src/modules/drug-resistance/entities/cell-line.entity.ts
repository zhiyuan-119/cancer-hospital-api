import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  // JoinTable,
  // ManyToMany,
} from 'typeorm';

// import { Drug } from './drug.entity';
// import { Disease } from './disease.entity';

@Entity({
  name: 'cell_line',
})
export class CellLine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    nullable: true,
    comment: 'GDSC药物编号 与药物中的drug_gdsc关联',
  })
  drug_gdsc: number | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '药物名',
  })
  drug_name: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'GDSC疾病缩写 与疾病中的gdsc关联',
  })
  gdsc: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '细胞系',
  })
  cell_line_name: string | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: 'Cosmic编号',
  })
  cosmic_id: number | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '组织',
  })
  tissue: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '亚组织',
  })
  tissue_sub_type: string | null;

  @Column({
    type: 'double',
    nullable: true,
    comment: 'IC50',
  })
  ic50: number | null;

  @Column({
    type: 'double',
    nullable: true,
    comment: 'AUC',
  })
  auc: number | null;

  @Column({
    type: 'double',
    nullable: true,
    comment: 'Max Conc',
  })
  max_conc: number | null;

  @Column({
    type: 'double',
    nullable: true,
    comment: 'RMSE',
  })
  rmse: number | null;

  @Column({
    type: 'double',
    nullable: true,
    comment: 'Z score',
  })
  z_score: number | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '数据集版本',
  })
  dataset_version: string | null;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  // @JoinTable()
  // @ManyToMany(() => Drug, (drug) => drug.drug_gdsc)
  // drugs: Drug[];

  // @JoinTable()
  // @ManyToMany(() => Disease, (disease) => disease.gdsc)
  // diseases: Disease[];
}
