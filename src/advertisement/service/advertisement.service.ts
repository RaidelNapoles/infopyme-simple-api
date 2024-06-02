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
    const ads: CreateAdvertisementDto[] =
      await this.jsonDataService.readJsonFile(this.dataFilePath);
    const newAds = ads.map((element) => {
      const record = {
        ...element,
        startDate: new Date(element.startDate),
      } as CreateAdvertisementDto;
      const now = Date.now();
      const start = record.startDate.getTime();
      const elapsedTime = now - start;
      record.timeFromStart = this.parseElapsedTime(elapsedTime);
      return record;
    });
    return newAds;
  }

  parseElapsedTime(elapsedTime: number) {
    const MICROSECONDS_IN_A_DAY = 86400000;
    const MICROSECONDS_IN_A_HOUR = 3600000;
    const MICROSECONDS_IN_A_MINUTE = 60000;
    const MICROSECONDS_IN_A_SECOND = 1000;
    const days = Math.floor(elapsedTime / MICROSECONDS_IN_A_DAY);
    let rest = elapsedTime % MICROSECONDS_IN_A_DAY;
    const hours = Math.floor(rest / MICROSECONDS_IN_A_HOUR);
    rest %= MICROSECONDS_IN_A_HOUR;
    const minutes = Math.floor(rest / MICROSECONDS_IN_A_MINUTE);
    rest %= MICROSECONDS_IN_A_MINUTE;
    const seconds = Math.floor(rest / MICROSECONDS_IN_A_SECOND);
    rest %= MICROSECONDS_IN_A_SECOND;

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
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
