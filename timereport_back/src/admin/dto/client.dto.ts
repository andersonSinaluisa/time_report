import { IsNotEmpty, IsString } from 'class-validator';

export class ClientRequestDto {
  @IsNotEmpty({
    message: 'El nombre es requerido',
  })
  @IsString({
    message: 'El nombre debe ser un texto',
  })
  name: string;

  @IsNotEmpty({
    message: 'La dirección es requerida',
  })
  @IsString({
    message: 'La dirección debe ser un texto',
  })
  description: string;

  @IsNotEmpty({
    message: 'El teléfono es requerido',
  })
  @IsString({
    message: 'El teléfono debe ser un texto',
  })
  identification: string;
}
