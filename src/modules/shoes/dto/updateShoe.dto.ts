import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Trim } from "../../../decorators";

export class UpdateShoeDto {
    @ApiProperty()
    @IsNotEmpty()
    @Trim()
    product_code: number;

    @ApiProperty()
    @IsNotEmpty()
    @Trim()
    size: number;

    @ApiProperty()
    @IsNotEmpty()
    @Trim()
    site: string;
}
