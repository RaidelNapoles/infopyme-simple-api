import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppPropertiesService } from '../services/app_properties.service';
import { CreateAppPropertyDto } from '../dto/create-app_property.dto';
import { UpdateAppPropertyDto } from '../dto/update-app_property.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('appProperties')
@Controller('app-properties')
export class AppPropertiesController {
  constructor(private readonly appPropertiesService: AppPropertiesService) {}

  @Post()
  create(@Body() createAppPropertyDto: CreateAppPropertyDto) {
    return this.appPropertiesService.create(createAppPropertyDto);
  }

  @Get()
  findAll() {
    return this.appPropertiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appPropertiesService.findOne(+id);
  }

  @Patch()
  update(@Body() updateAppPropertyDto: UpdateAppPropertyDto) {
    return this.appPropertiesService.update(updateAppPropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appPropertiesService.remove(+id);
  }
}
