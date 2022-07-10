import { Column, Entity } from "typeorm";

import type { IAbstractEntity } from "../../common/abstract.entity";
import { AbstractEntity } from "../../common/abstract.entity";
import { UseDto } from "../../decorators";
import { ShoeDto, ShoeDtoOptions } from "./dto/shoes.dto";

export interface IShoeEntity extends IAbstractEntity<ShoeDto> {
    id: Uuid;
    product_code: number;
    size: number;
    site: string;
    owner_id: Uuid;
    requester_id: Uuid;
}

@Entity({ name: "shoes" })
@UseDto(ShoeDto)
export class ShoeEntity
  extends AbstractEntity<ShoeDto, ShoeDtoOptions>
  implements IShoeEntity
{
  @Column()
  id: Uuid;

  @Column()
  product_code: number;

  @Column()
  size: number;

  @Column()
  site: string;

  @Column()
  owner_id: Uuid;

  @Column()
  requester_id: Uuid;
}
