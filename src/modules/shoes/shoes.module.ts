import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { ShoesRepository } from './shoes.repository';
import { ShoesController } from './shoes.controller';
import { ShoesService } from './shoes.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShoesRepository]), CqrsModule],
  controllers: [ShoesController],
  exports: [ShoesService],
  providers: [ShoesService]
})
export class ShoesModule { }