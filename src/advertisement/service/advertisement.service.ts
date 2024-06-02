import { Injectable } from '@nestjs/common';
import { CreateAdvertisementDto } from '../dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from '../dto/update-advertisement.dto';
import { join } from 'path';
import { JsonDataService } from './json.data.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AdvertisementService {
  dataFilePath = join(__dirname, '..', '..', '..', 'data', 'ads.json');

  constructor(private readonly jsonDataService: JsonDataService) {}

  async create(createAdvertisementDto: CreateAdvertisementDto) {
    const adsList = await this.jsonDataService.readJsonFile(this.dataFilePath);
    const newAds: CreateAdvertisementDto = {
      ...createAdvertisementDto,
      id: uuidv4(),
      startDate: new Date(),
    };
    adsList.push(newAds);
    await this.jsonDataService.writeJsonFile(this.dataFilePath, adsList);
    return newAds;
  }

  async findAll() {
    return await this.jsonDataService.readJsonFile(this.dataFilePath);
  }

  async findOne(id: string) {
    const adsList = await this.jsonDataService.readJsonFile(this.dataFilePath);
    return adsList.find((ads) => ads.id === id);
  }

  async update(id: string, updateAdvertisementDto: UpdateAdvertisementDto) {
    const adsList = await this.jsonDataService.readJsonFile(this.dataFilePath);
    const ads = adsList.find((ads) => ads.id === id);
    // ads = { ...ads, ...updateAdvertisementDto };
    Object.assign(ads, updateAdvertisementDto);
    await this.jsonDataService.writeJsonFile(this.dataFilePath, adsList);
    return ads;
  }

  async remove(id: string) {
    const adsList = await this.jsonDataService.readJsonFile(this.dataFilePath);
    await this.jsonDataService.writeJsonFile(
      this.dataFilePath,
      adsList.filter((ads) => ads.id !== id),
    );
  }

  async removeAll() {
    await this.jsonDataService.writeJsonFile(this.dataFilePath, []);
  }
}
