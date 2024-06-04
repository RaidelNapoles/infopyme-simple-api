import { Injectable } from '@nestjs/common';
import { CreateAppPropertyDto } from '../dto/create-app_property.dto';
import { UpdateAppPropertyDto } from '../dto/update-app_property.dto';
import { join } from 'path';
import { JsonDataService } from '../../services/json.data.service';

@Injectable()
export class AppPropertiesService {
  dataFilePath = join(
    __dirname,
    '..',
    '..',
    '..',
    'data',
    'app_properties.json',
  );

  constructor(private readonly jsonDataService: JsonDataService) {}

  create(createAppPropertyDto: CreateAppPropertyDto) {
    return 'This action adds a new appProperty';
  }

  async findAll() {
    const app_properties = await this.jsonDataService.readJsonFile(
      this.dataFilePath,
    );
    return app_properties;
  }

  findOne(id: number) {
    return `This action returns a #${id} appProperty`;
  }

  update(id: number, updateAppPropertyDto: UpdateAppPropertyDto) {
    return `This action updates a #${id} appProperty`;
  }

  remove(id: number) {
    return `This action removes a #${id} appProperty`;
  }
}
