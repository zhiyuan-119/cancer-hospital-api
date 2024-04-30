import { Injectable, HttpException, HttpStatus, Logger, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
// 使用mysql数据库
import { Drug } from './entities/drug.entity';
import { Disease } from './entities/disease.entity';
import { CellLine } from './entities/cell-line.entity';
import { Gene } from './entities/gene.entity';
import { Pathway } from './entities/pathway.entity';
import { Protein } from './entities/protein.entity';

import { DrugSearchDto, DrugDetailDto, DiseaseDetailDto, GeneSearchDto, ProteinSearchDto, PathwaySearchDto, RelatedDrugsDto, CellLineSearchDto, ListDto } from './dto/drug-resistance.dto';

@Injectable()
export class DrugResistanceService {
  
  private logger = new Logger();

  // 药物实体
  @InjectRepository(Drug)
  private drugRepository: Repository<Drug>;
  // 疾病实体
  @InjectRepository(Disease)
  private diseaseRepository: Repository<Disease>;
  // 基因实体
  @InjectRepository(Gene)
  private geneRepository: Repository<Gene>;
  // 蛋白实体
  @InjectRepository(Protein)
  private proteinRepository: Repository<Protein>;
  // 通路实体
  @InjectRepository(Pathway)
  private pathwayRepository: Repository<Pathway>;
  // 细胞器实体
  @InjectRepository(CellLine)
  private cellLineRepository: Repository<CellLine>;

  // 药物检索列表
  async getDrugSearchList(DrugSearchDto: DrugSearchDto) {
    this.logger.log('name',  DrugSearchDto.name);
    const name = DrugSearchDto.name;
    
    const list = await this.drugRepository.find({
      where: [
        {
          name: Like(`%${name}%`),
        },
        {
          drug_bank: Like(`%${name}%`),
        }
      ],
      take: 50,
      select: ['id', 'name', 'drug_bank', 'drug_gdsc', 'drug_dresis'],
    });

    return list;
  }

  // 药物详情
  async getDrugDetail(DrugDetailDto: DrugDetailDto) {
    const id = DrugDetailDto.id;
    const drug = await this.drugRepository.findOne({
      where: {
        id,
      }
    });
    if(!drug) {
      throw new HttpException('药物不存在', HttpStatus.NOT_FOUND);
    }

    return drug;
  }

  // 疾病列表
  async getDiseaseList() {
    const list = await this.diseaseRepository.find({
      select: ['id', 'gdsc', 'dis_dresis'],
    });

    return list;
  }

  // 疾病详情
  async getDiseaseDetail(DiseaseDetailDto: DiseaseDetailDto) {
    const id = DiseaseDetailDto.id;
    const disease = await this.diseaseRepository.findOne({
      where: {
        id,
      }
    });
    if(!disease) {
      throw new HttpException('疾病不存在', HttpStatus.NOT_FOUND);
    }

    return disease;
  }

  // 基因检索查询
  async getGeneSearchList(GeneSearchDto: GeneSearchDto) { 
    const name = GeneSearchDto.name;
    
    const list = await this.geneRepository.find({
      where: [
        {
          molecule_name: Like(`%${name}%`),
        },
        {
          molecule_dresis: Like(`%${name}%`),
        }
      ],
      take: 50,
      select: ['id', 'drug_dresis', 'dis_dresis', 'molecule_name', 'molecule_dresis'],
    });

    return list;
  }

  // 蛋白检索查询
  async getProteinSearchList(ProteinSearchDto: ProteinSearchDto) {
    const name = ProteinSearchDto.name;
    
    const list = await this.proteinRepository.find({
      where: [
        {
          molecule_name: Like(`%${name}%`),
        },
        {
          molecule_dresis: Like(`%${name}%`),
        }
      ],
      take: 50,
      select: ['id', 'drug_dresis', 'dis_dresis', 'molecule_name', 'molecule_dresis'],
    });

    return list;
  }

  // 通路检索查询
  async getPathwaySearchList(PathwaySearchDto: PathwaySearchDto) {
    const name = PathwaySearchDto.name;

    const condition: Record<string, any> = {};
    if(isNaN(Number(name))) {
      condition.name = Like(`%${name}%`);
    } else {
      condition.id = Number(name);
    }
    
    const list = await this.pathwayRepository.find({
      where: condition,
      take: 50,
      select: ['id', 'drug_dresis', 'dis_dresis', 'name'],
    });

    return list;
  }

  // 基因/蛋白/通路-关联药物列表
  async getRelatedDrugs(RelatedDrugsDto: RelatedDrugsDto) {
    const id = RelatedDrugsDto.id;
    const relatedDrugs = await this.drugRepository.find({
      where: {
        drug_dresis: id.toString(),
      }
    });

    return relatedDrugs;
  }

  // 细胞系检索查询
  async getCellLineSearchList(CellLineSearchDto: CellLineSearchDto) {
    const name = CellLineSearchDto.name;

    const condition: Record<string, any> = {};
    if(isNaN(Number(name))) {
      condition.cell_line_name = Like(`%${name}%`);
    } else {
      condition.id = Number(name);
    }
    
    const list = await this.cellLineRepository.find({
      where: condition,
      take: 50,
      select: ['id', 'drug_gdsc', 'gdsc', 'cell_line_name', 'drug_name'],
    });

    return list;
  }

  // 细胞系关联药物列表
  async getCellLineRelatedDrugs(RelatedDrugsDto: RelatedDrugsDto) {
    const id = RelatedDrugsDto.id;
    const relatedDrugs = await this.drugRepository.find({
      where: {
        drug_gdsc: Number(id),
      }
    });

    return relatedDrugs;
  }

  // 详情-基因列表
  async getGeneList(ListDto: ListDto) {
    const { pageNo, pageSize, drugId, diseaseId, name } = ListDto;
    if (pageNo < 1) {
      throw new BadRequestException('页码最小为 1');
    }
    const skipCount = (pageNo - 1) * pageSize;

    const condition: Record<string, any> = {};

    if (name) {
      condition.molecule_name = Like(`%${name}%`);
    }

    condition.drug_dresis = drugId;
    condition.dis_dresis = diseaseId;

    const [list, total] = await this.geneRepository.findAndCount({
      skip: skipCount,
      take: pageSize,
      where: condition,
    });

    return {
      list,
      total
    }
  }

  // 详情-蛋白列表
  async getProteinList(ListDto: ListDto) {
    const { pageNo, pageSize, drugId, diseaseId, name } = ListDto;
    if (pageNo < 1) {
      throw new BadRequestException('页码最小为 1');
    }
    const skipCount = (pageNo - 1) * pageSize;

    const condition: Record<string, any> = {};

    if (name) {
      condition.molecule_name = Like(`%${name}%`);
    }

    condition.drug_dresis = drugId;
    condition.dis_dresis = diseaseId;

    const [list, total] = await this.proteinRepository.findAndCount({
      skip: skipCount,
      take: pageSize,
      where: condition,
    });

    return {
      list,
      total
    }
  }

  // 详情-通路列表
  async getPathwayList(ListDto: ListDto) {
    const { pageNo, pageSize, drugId, diseaseId, name } = ListDto;
    if (pageNo < 1) {
      throw new BadRequestException('页码最小为 1');
    }
    const skipCount = (pageNo - 1) * pageSize;

    const condition: Record<string, any> = {};

    if (name) {
      condition.name = Like(`%${name}%`);
    }

    condition.drug_dresis = drugId;
    condition.dis_dresis = diseaseId;

    const [list, total] = await this.pathwayRepository.findAndCount({
      skip: skipCount,
      take: pageSize,
      where: condition,
    });

    return {
      list,
      total
    }
  }

  // 详情-细胞系列表
  async getCellLineList(ListDto: ListDto) {
    const { pageNo, pageSize, drugId, diseaseId, name } = ListDto;
    if (pageNo < 1) {
      throw new BadRequestException('页码最小为 1');
    }
    const skipCount = (pageNo - 1) * pageSize;

    const condition: Record<string, any> = {};

    if (name) {
      condition.cell_line_name = Like(`%${name}%`);
    }

    condition.drug_gdsc = drugId;
    condition.gdsc = diseaseId;

    const [list, total] = await this.cellLineRepository.findAndCount({
      skip: skipCount,
      take: pageSize,
      where: condition,
    });

    return {
      list,
      total
    }
  }
}
