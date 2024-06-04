import { PartialType } from '@nestjs/swagger';
import { CreateAppPropertyDto } from './create-app_property.dto';

export class UpdateAppPropertyDto extends PartialType(CreateAppPropertyDto) {}
