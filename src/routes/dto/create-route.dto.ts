import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class PositionDto {
  @IsNumber()
  @IsNotEmpty()
  lat: number;

  @IsNumber()
  @IsNotEmpty()
  lng: number;
}

export class CreateRouteDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  startPosition: PositionDto;

  endPosition: PositionDto;
}
