import { Controller, Get, Query, HttpStatus, ValidationPipe } from '@nestjs/common';
// api文档
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// 服务
import { DrugResistanceService } from './drug-resistance.service';
// 请求校验规则
import { DrugSearchDto, DrugDetailDto, DiseaseDetailDto, GeneSearchDto, ProteinSearchDto, PathwaySearchDto, RelatedDrugsDto, CellLineSearchDto, ListDto } from './dto/drug-resistance.dto';

@ApiTags('耐药模块')
@Controller('drug-resistance')
export class DrugResistanceController {
  constructor(private readonly drugResistanceService: DrugResistanceService) { }

  @ApiOperation({ summary: '药物检索列表', description: '根据药物名称、药物ID检索药物列表'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Get('/drug-search-list')
  getDrugSearchList(
    @Query(ValidationPipe) DrugSearchDto: DrugSearchDto
  ) {
    return this.drugResistanceService.getDrugSearchList(DrugSearchDto);
  }

  @ApiOperation({ summary: '药物详情', description: '根据药物ID获取药物详情'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Get('/drug-detail')
  getDrugDetail(
    @Query(ValidationPipe) DrugDetailDto: DrugDetailDto
  ) {
    return this.drugResistanceService.getDrugDetail(DrugDetailDto);
  }

  @ApiOperation({ summary: '疾病列表', description: '获取疾病列表'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Get('/disease-list')
  getDiseaseList() {
    return this.drugResistanceService.getDiseaseList();
  }

  @ApiOperation({ summary: '疾病详情', description: '根据疾病ID获取疾病详情'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Get('/disease-detail')
  getDiseaseDetail(
    @Query(ValidationPipe) DiseaseDetailDto: DiseaseDetailDto
  ) {
    return this.drugResistanceService.getDiseaseDetail(DiseaseDetailDto);
  }

  @ApiOperation({ summary: '基因检索列表', description: '根据基因名称、基因ID检索基因列表'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Get('/gene-search-list')
  getGeneSearchList(
    @Query(ValidationPipe) GeneSearchDto: GeneSearchDto
  ) {
    return this.drugResistanceService.getGeneSearchList(GeneSearchDto);
  }

  @ApiOperation({ summary: '蛋白检索列表', description: '根据蛋白名称、蛋白ID检索蛋白列表'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Get('/protein-search-list')
  getProteinSearchList(
    @Query(ValidationPipe) ProteinSearchDto: ProteinSearchDto
  ) {
    return this.drugResistanceService.getProteinSearchList(ProteinSearchDto);
  }

  @ApiOperation({ summary: '通路检索列表', description: '根据通路名称、通路ID检索通路列表'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Get('/pathway-search-list')
  getPathwaySearchList(
    @Query(ValidationPipe) PathwaySearchDto: PathwaySearchDto
  ) {
    return this.drugResistanceService.getPathwaySearchList(PathwaySearchDto);
  }

  @ApiOperation({ summary: '基因、蛋白、通路关联药物列表', description: '根据药物drug_dresis参数获取相关药物列表'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Get('/related-drugs')
  getRelatedDrugs(
    @Query(ValidationPipe) RelatedDrugsDto: RelatedDrugsDto
  ) {
    return this.drugResistanceService.getRelatedDrugs(RelatedDrugsDto);
  }
 
  @ApiOperation({ summary: '细胞系检索列表', description: '根据细胞系名称、细胞系ID检索细胞系列表'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Get('/cell-line-search-list')
  getCellLineSearchList(
    @Query(ValidationPipe) CellLineSearchDto: CellLineSearchDto
  ) {
    return this.drugResistanceService.getCellLineSearchList(CellLineSearchDto);
  }

  @ApiOperation({ summary: '细胞系关联药物列表', description: '根据药物drug_gdsc参数获取细胞系关联药物列表'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Get('/cell-line-related-drugs')
  getCellLineRelatedDrugs(
    @Query(ValidationPipe) RelatedDrugsDto: RelatedDrugsDto
  ) {
    return this.drugResistanceService.getCellLineRelatedDrugs(RelatedDrugsDto);
  }

  @ApiOperation({ summary: '详情-基因列表', description: '根据药物drug_dresis参数、疾病dis_dresis参数获取基因列表'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Get('/gene-list')
  getGeneList(
    @Query(ValidationPipe) ListDto: ListDto
  ) {
    return this.drugResistanceService.getGeneList(ListDto);
  }

  @ApiOperation({ summary: '详情-蛋白列表', description: '根据药物drug_dresis参数、疾病dis_dresis参数获取蛋白列表'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Get('/protein-list')
  getProteinList(
    @Query(ValidationPipe) ListDto: ListDto
  ) {
    return this.drugResistanceService.getProteinList(ListDto);
  }

  @ApiOperation({ summary: '详情-通路列表', description: '根据药物drug_dresis参数、疾病dis_dresis参数获取通路列表'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Get('/pathway-list')
  getPathwayList(
    @Query(ValidationPipe) ListDto: ListDto
  ) {
    return this.drugResistanceService.getPathwayList(ListDto);
  }

  @ApiOperation({ summary: '详情-细胞系列表', description: '根据药物drug_gdsc参数、疾病gdsc参数获取细胞系列表'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Get('/cell-line-list')
  getCellLineList(
    @Query(ValidationPipe) ListDto: ListDto
  ) {
    return this.drugResistanceService.getCellLineList(ListDto);
  }
}
