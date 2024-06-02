import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEmail } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class CreateAdvertisementDto {
  @ApiPropertyOptional({
    default: uuidv4(),
  })
  id?: string;

  @ApiProperty()
  tittle: string;

  @ApiProperty()
  text: string;

  @ApiProperty()
  businessName: string;

  @ApiProperty()
  phone: string;

  @ApiProperty({ example: 'infopymecuba@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: Date,
    default: new Date(),
  })
  @IsDateString()
  startDate: Date;

  @ApiPropertyOptional({ default: 30 })
  duration?: number;

  @ApiPropertyOptional()
  imageUrl?: string;

  @ApiPropertyOptional({ default: true })
  isAlive?: boolean;
}
