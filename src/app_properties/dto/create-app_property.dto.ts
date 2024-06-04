import { ApiProperty } from '@nestjs/swagger';

export class CreateAppPropertyDto {
  @ApiProperty()
  app_version: string;
}
