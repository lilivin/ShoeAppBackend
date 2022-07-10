import { EntityRepository, Repository } from "typeorm";
import { ShoeEntity } from "./shoes.entity";

@EntityRepository(ShoeEntity)
export class ShoesRepository extends Repository<ShoeEntity> {}
