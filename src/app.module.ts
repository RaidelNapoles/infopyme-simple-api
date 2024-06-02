import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdvertisementModule } from './advertisement/advertisement.module';

@Module({
  imports: [AdvertisementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
