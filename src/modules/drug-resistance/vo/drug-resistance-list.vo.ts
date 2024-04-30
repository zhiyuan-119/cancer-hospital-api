import { ApiProperty } from "@nestjs/swagger";
import { DrugResistanceVo } from "./drug-resistance.vo";

export class DrugResistanceListVo {

    @ApiProperty({
        type: [DrugResistanceVo]
    })
    data: Array<DrugResistanceVo>;

    @ApiProperty()
    total: number;
}
