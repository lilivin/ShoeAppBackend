import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Post, Put } from '@nestjs/common';
import { ApiAcceptedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UUIDParam } from '../../decorators';
import { CreateShoeDto } from './dto/createShoe.dto';
import { ShoeDto, ShoesDto } from './dto/shoes.dto';
import { UpdateShoeDto } from './dto/updateShoe.dto';
import { ShoeEntity } from './shoes.entity';
import { ShoesService } from './shoes.service';

@Controller('shoes')
@ApiTags('shoes')
export class ShoesController {
  constructor(private readonly shoesService: ShoesService) {}

  @Post('/create-shoe')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: ShoesDto,
    description: 'Successfully created shoe'
  })
  async createShoe(@Body() shoe:CreateShoeDto):Promise<ShoeEntity>
  {
    return await this.shoesService.createShoe(shoe);
  }

  @Get('/all-shoes')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: ShoesDto,
    description: 'List of profiles successfully fetched'
  })
  async getAllShoes():Promise<ShoesDto>{
    return await this.shoesService.getAllShoes();
  }

  @Get('/all-user-shoes/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: ShoesDto,
    description: 'List of profiles successfully fetched'
  })
  async getAllUserShoes(@UUIDParam('id') id: Uuid):Promise<ShoeDto[]>{
    return await this.shoesService.getAllUserShoes(id);
  }

  @Delete('/delete-shoe/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiAcceptedResponse()
  async deletePost(@UUIDParam('id') id: Uuid): Promise<void> {
    await this.shoesService.deleteShoe(id);
  }

  @Put('/update-shoe/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiAcceptedResponse()
  updateShoe(
    @UUIDParam('id') id: Uuid,
    @Body() updateShoeDto: UpdateShoeDto,
  ): Promise<void> {
    return this.shoesService.updateShoe(id, updateShoeDto);
  }
}
