import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DrugSearchDto {
  @ApiProperty(
    {
      type: String,
      default: 'prednisolone',
      description: '耐药名称、耐药ID',
      required: true,
    }
  )
  @IsNotEmpty({
    message: '名称/ID不能为空',
  })
  name: string;
}

export class DrugDetailDto {
  @ApiProperty(
    {
      type: Number,
      default: 1,
      description: '耐药ID',
      required: true,
    }
  )
  @IsNotEmpty({
    message: '耐药ID不能为空',
  })
  id: number;
}

export class DiseaseDetailDto {
  @ApiProperty(
    {
      type: Number,
      default: 1,
      description: '疾病ID',
      required: true,
    }
  )
  @IsNotEmpty({
    message: '疾病ID不能为空',
  })
  id: number;
}

export class GeneSearchDto {
  @ApiProperty(
    {
      type: String,
      default: 'hsa-mir-34',
      description: '基因名称、基因ID',
      required: true,
    }
  )
  @IsNotEmpty({
    message: '名称/ID不能为空',
  })
  name: string;
}

export class ProteinSearchDto {
  @ApiProperty(
    {
      type: String,
      default: 'Sorcin (SRI)',
      description: '蛋白名称、蛋白ID',
      required: true,
    }
  )
  @IsNotEmpty({
    message: '名称/ID不能为空',
  })
  name: string;
}

export class PathwaySearchDto {
  @ApiProperty(
    {
      type: String,
      default: 'Cell invasion',
      description: '通路名称、通路ID',
      required: true,
    }
  )
  @IsNotEmpty({
    message: '名称/ID不能为空',
  })
  name: string;
}

export class RelatedDrugsDto {
  @ApiProperty(
    {
      type: String,
      default: 'DG00164',
      description: '关联药物ID',
      required: true,
    }
  )
  @IsNotEmpty({
    message: '关联药物ID不能为空',
  })
  id: string;
}

export class CellLineSearchDto {
  @ApiProperty(
    {
      type: String,
      default: 'HDQ-P1',
      description: '细胞系名称、细胞系ID',
      required: true,
    }
  )
  @IsNotEmpty({
    message: '名称/ID不能为空',
  })
  name: string;
}

export class ListDto {
  @ApiProperty(
    {
      type: Number,
      default: 1,
      description: '当前页',
      required: true,
    }
  )
  @IsNotEmpty({
    message: '当前页不能为空',
  })
  pageNo: number;

  @ApiProperty(
    {
      type: Number,
      default: 10,
      description: '每页数量',
      required: true,
    }
  )
  @IsNotEmpty({
    message: '每页数量不能为空',
  })
  pageSize: number;

  @ApiProperty(
    {
      type: String,
      default: 'DG00273',
      description: '药物DRESIS编码',
      required: true,
    }
  )
  @IsNotEmpty({
    message: '药物DRESIS编码不能为空',
  })
  drugId: string;

  @ApiProperty(
    {
      type: String,
      default: 'DIS00071',
      description: '疾病DRESIS编码',
      required: true,
    }
  )
  @IsNotEmpty({
    message: '疾病DRESIS编码不能为空',
  })
  diseaseId: string;

  @ApiProperty(
    {
      type: String,
      description: '名称',
      required: false,
    }
  )
  name: string;
}