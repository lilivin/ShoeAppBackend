import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Trim } from "../../../decorators";

export class CreateShoeDto{
    @ApiProperty()
    @IsNotEmpty()
    @Trim()
    readonly product_code: number;

    @ApiProperty()
    @IsNotEmpty()
    @Trim()
    readonly size: number;

    @ApiProperty()
    @IsNotEmpty()
    @Trim()
    readonly site: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly owner_id: Uuid;

    @ApiProperty()
    readonly requester_id: Uuid;
}