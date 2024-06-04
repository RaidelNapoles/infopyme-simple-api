import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private configService: ConfigService) {}

  @Interval(120000)
  async checkRenderConnection() {
    const current_env = this.configService.get<string>('CURRENT_ENV');

    if (current_env && current_env === 'LOCAL') {
      const url = this.configService.get<string>('URL_TO_TEST');
      this.logger.debug(`Starting connection with ${url}....`);
      const start = Date.now();
      await fetch(url);
      const end = Date.now();
      this.logger.debug(`Execution time fetching: ${end - start} ms`);
    } else {
      this.logger.debug(`No need to check url`);
    }
  }

  // async onModuleInit() {
  //   const current_env = this.configService.get<string>('CURRENT_ENV');
  //   if (current_env === 'LOCAL') {
  //     await this.checkRenderConnection();
  //   }
  // }
}
