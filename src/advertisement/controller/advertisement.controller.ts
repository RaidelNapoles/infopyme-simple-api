import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdvertisementService } from '../service/advertisement.service';
import { CreateAdvertisementDto } from '../dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from '../dto/update-advertisement.dto';

@Controller('advertisement')
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) {}

  @Post()
  create(@Body() createAdvertisementDto: CreateAdvertisementDto) {
    return this.advertisementService.create(createAdvertisementDto);
  }

  @Get()
  findAll() {
    return this.advertisementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advertisementService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdvertisementDto: UpdateAdvertisementDto,
  ) {
    return this.advertisementService.update(id, updateAdvertisementDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.advertisementService.remove(id);
  }

  @Delete('removeAll')
  removeAll() {
    return this.advertisementService.removeAll();
  }
}
