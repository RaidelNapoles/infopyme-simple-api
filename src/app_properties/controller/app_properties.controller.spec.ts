import { Test, TestingModule } from '@nestjs/testing';
import { AppPropertiesController } from './app_properties.controller';
import { AppPropertiesService } from '../services/app_properties.service';

describe('AppPropertiesController', () => {
  let controller: AppPropertiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppPropertiesController],
      providers: [AppPropertiesService],
    }).compile();

    controller = module.get<AppPropertiesController>(AppPropertiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
