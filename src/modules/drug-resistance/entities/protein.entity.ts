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
  name: 'protein',
})
export class Protein {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '关联ID号 DRESIS关联ID',
  })
  dresis_pair: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '药物DRESIS编码 与药物中的drug_gdsc关联',
  })
  drug_dresis: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'DrugBank',
  })
  drug_bank: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '疾病DRESIS编码 与疾病中的gdsc关联',
  })
  dis_dresis: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'GDSC肿瘤缩写 与disease中的gdsc相同',
  })
  gdsc: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '分子DRESIS编码',
  })
  molecule_dresis: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '分子名称',
  })
  molecule_name: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '药物敏感性 Resistance：耐药； Sensitivity：敏感；',
  })
  drug_sensitivity: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '机制类别',
  })
  mechanism_classification_name: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '耐药分类',
  })
  molecule_pattern_type: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '耐药原理',
  })
  molecule_pattern: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '测量方法',
  })
  molecule_method: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '细胞系调控 按照分号分隔，has为指标，-为抑制，+为促进',
  })
  cell_pathway_regulation: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '验证方法',
  })
  drug_resistance_level: string | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: '细胞系调控 按照分号分隔，has为指标，-为抑制，+为促进',
  })
  mechanism_description: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '分子类别',
  })
  molecule_type: string | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: '同义词',
  })
  synonyms: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '基因名',
  })
  gene_name: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '基因编号',
  })
  gene_id: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '分子物种',
  })
  molecule_species: string | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: '物种ID',
  })
  species_id: number | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '物种名',
  })
  species: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '物种属',
  })
  genus: string | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: '属ID',
  })
  genus_id: number | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '物种科',
  })
  family: string | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: '科ID',
  })
  family_id: number | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '物种目',
  })
  order: string | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: '目ID',
  })
  order_id: number | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '物种纲',
  })
  class: string | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: '纲ID',
  })
  class_id: number | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '物种门',
  })
  phylum: string | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: '门ID',
  })
  phylum_id: number | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '物种界',
  })
  kingdom: string | null;

  @Column({
    type: 'int',
    nullable: true,
    comment: '界ID',
  })
  kingdom_id: number | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: '基因转录本',
  })
  gene_transcripts: string | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: '碱基序列',
  })
  sequence: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '染色体位置',
  })
  chromosomal_location: string | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: '功能',
  })
  function: string | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: '结构',
  })
  structure: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'HGNC ID 一种基因ID',
  })
  hgnc_id: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'UniProt',
  })
  uni_prot_id: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'UniProt编号状态',
  })
  uni_prot_id_status: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'Ensembl编号',
  })
  ensembl_id: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '前体序列编号',
  })
  precursor_accession: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: '成熟分子访问号',
  })
  mature_accession: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'miRNA编号',
  })
  mature_precursor_mi_rnas: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'circBase编号 环形RNA编号',
  })
  circ_base_id: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'piRBase编号 长非编码RNA的编号',
  })
  pi_r_base_id: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'Reference编号',
  })
  reference_id: string | null;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;

  // @ManyToOne(() => Drug)
  // drug: Relation<Drug>;

  // @ManyToOne(() => Disease)
  // disease: Relation<Disease>;
}
