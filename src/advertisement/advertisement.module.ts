import { Module } from '@nestjs/common';
import { AdvertisementService } from './service/advertisement.service';
import { AdvertisementController } from './controller/advertisement.controller';
import { JsonDataService } from './service/json.data.service';

@Module({
  controllers: [AdvertisementController],
  providers: [AdvertisementService, JsonDataService],
})
export class AdvertisementModule {}
