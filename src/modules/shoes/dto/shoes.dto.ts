import { ApiProperty } from "@nestjs/swagger";

import { AbstractDto } from "../../../common/dto/abstract.dto";
import { IsArray } from "class-validator";
import { ShoeEntity } from "../shoes.entity";

export type ShoeDtoOptions = Partial<{ isActive: boolean }>;

export class ShoeDto extends AbstractDto {
  isActive?: boolean;

  @ApiProperty()
  id: Uuid;

  @ApiProperty()
  product_code: number;

  @ApiProperty()
  size: number;

  @ApiProperty()
  site: string;

  @ApiProperty()
  owner_id: Uuid;

  @ApiProperty()
  requester_id: Uuid;

  constructor(shoe: ShoeEntity) {
    super(shoe);
    this.id = shoe.id;
    this.product_code = shoe.product_code;
    this.size = shoe.size;
    this.site = shoe.site;
    this.owner_id = shoe.owner_id;
    this.requester_id = shoe.requester_id;
  }
}

export class ShoesDto {
  @IsArray()
  @ApiProperty({ type: ShoeDto, isArray: true })
  readonly shoes: ShoeDto[]

  constructor(shoes:ShoeDto[]){
      this.shoes = shoes;
  }
}
