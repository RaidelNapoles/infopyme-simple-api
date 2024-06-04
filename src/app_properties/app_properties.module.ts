import { Module } from '@nestjs/common';
import { AppPropertiesService } from './services/app_properties.service';
import { AppPropertiesController } from './controller/app_properties.controller';
import { JsonDataService } from '../services/json.data.service';

@Module({
  controllers: [AppPropertiesController],
  providers: [AppPropertiesService, JsonDataService],
})
export class AppPropertiesModule {}
