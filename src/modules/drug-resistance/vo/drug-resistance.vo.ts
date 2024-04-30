import { ApiProperty } from '@nestjs/swagger';

export class DrugResistanceVo {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    // @ApiProperty()
    // createTime: Date;

    // @ApiProperty()
    // updateTime: Date;
}
