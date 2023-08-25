import { IsArray, IsString } from 'class-validator';

export class RoleRequestDto {
  @IsString()
  name: string;
  @IsString()
  description: string;

  @IsArray()
  permissions: {
    id: number,
  }[];
}

export class RoleResponseDto {
  id: number;
  name: string;
  description: string;
  permissions: {
    id: number,
    code: string,
    description: string,
  }[];
}
