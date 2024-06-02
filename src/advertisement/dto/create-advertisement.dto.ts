import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsEmail } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class CreateAdvertisementDto {
  @ApiPropertyOptional({
    default: uuidv4(),
  })
  id?: string;

  @ApiProperty({ default: 'Leche evaporada' })
  tittle: string;

  @ApiProperty({ default: 'Oferta de leche evaporada' })
  text: string;

  @ApiProperty({ default: 'Infopyme Ventas' })
  businessName: string;

  @ApiProperty({ default: '(+53) 53026190' })
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

  @ApiPropertyOptional({
    example:
      'https://drive.google.com/file/d/1WbtuofHpneiAGVAWEBmz-cdJEbSM5RgR/view?usp=drive_link',
  })
  imageUrl?: string;

  @ApiPropertyOptional({ default: true })
  isAlive?: boolean;
}
