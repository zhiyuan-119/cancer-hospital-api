import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drug } from './entities/drug.entity';
import { Disease } from './entities/disease.entity';
import { CellLine } from './entities/cell-line.entity';
import { Gene } from './entities/gene.entity';
import { Pathway } from './entities/pathway.entity';
import { Protein } from './entities/protein.entity';

import { DrugResistanceService } from './drug-resistance.service';
import { DrugResistanceController } from './drug-resistance.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Drug, 
    Disease, CellLine, Gene, Pathway, Protein
  ])],
  controllers: [DrugResistanceController],
  providers: [DrugResistanceService],
})
export class DrugResistanceModule {}
