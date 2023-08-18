import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNumber,
  IsString,
} from 'class-validator';

export class UserResponseDto {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;

  @IsDate()
  deleted_at: Date;

  @IsString()
  identification: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsString()
  zip_code: string;

  @IsString()
  role: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  avatar: string;
}

export class UserRequest {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  password: string;

  @IsString()
  identification: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsString()
  zip_code: string;

  @IsString()
  role: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  avatar: string;
}
