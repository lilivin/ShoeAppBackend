import { Injectable, NotFoundException } from '@nestjs/common';
import { ShoeDto, ShoesDto } from './dto/shoes.dto';
import { CreateShoeDto } from './dto/createShoe.dto';
import { ShoeEntity } from './shoes.entity';
import { ShoesRepository } from './shoes.repository';
import { UpdateShoeDto } from './dto/updateShoe.dto';
import { getConnection } from 'typeorm';

@Injectable()
export class ShoesService {
    constructor(private shoesRepository: ShoesRepository) { }

    async createShoe(shoeDto: CreateShoeDto):Promise<ShoeEntity>{
        const profile = this.shoesRepository.create(shoeDto);
        await this.shoesRepository.save(profile);

        return profile;
    }

    async getAllShoes():Promise<ShoesDto>{
        const queryBuilder = this.shoesRepository.createQueryBuilder('shoes');
        const shoes = queryBuilder.getMany();

        if(!shoes)   throw new NotFoundException('Shoes not found!');
        return new ShoesDto((await shoes).toDtos());
    }

    async getAllUserShoes(id: Uuid):Promise<ShoeDto[]>{
      const queryBuilder = this.shoesRepository.createQueryBuilder('shoes');

      queryBuilder.where('shoes.owner_id = :id', { id });

      const userEntity = await queryBuilder.getMany();

      if (!userEntity) {
        throw new NotFoundException('Shoes not found!');
      }

      return userEntity.toDtos();
      // const queryBuilder = this.shoesRepository.createQueryBuilder('shoes');
      // const shoes = queryBuilder.getMany();

      // if(!shoes)   throw new NotFoundException('Shoes not found!');
      // return new ShoesDto((await shoes).toDtos());
  }

    async deleteShoe(id: Uuid): Promise<void> {
      const queryBuilder = this.shoesRepository
        .createQueryBuilder('shoes')
        .where('shoes.id = :id', { id });
  
      const shoesEntity = await queryBuilder.getOne();

      if (!shoesEntity) {
          throw new NotFoundException('Shoes not found!');
        }
  
      await this.shoesRepository.remove(shoesEntity);
    }

    async updateShoe(id: Uuid, updateShoeDto: UpdateShoeDto): Promise<void> {
      await getConnection()
          .createQueryBuilder()
          .update(ShoeEntity)
          .set({ product_code: updateShoeDto.product_code, size: updateShoeDto.size, site: updateShoeDto.site })
          .where('shoes.id = :id', { id })
          .execute()
    }
}
