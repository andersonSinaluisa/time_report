import {ApiProperty} from '@nestjs/swagger';
import {IsBoolean, IsDate, IsEmail, IsNumber, IsString} from 'class-validator';

export class UserResponseDto {
	@ApiProperty()
	@IsNumber()
	id: number;

	@IsEmail()
	@ApiProperty()
	email: string;

	@IsString()
	@ApiProperty()
	first_name: string;

	@IsString()
	@ApiProperty()
	last_name: string;

	@IsDate()
	@ApiProperty()
	created_at: Date;

	@IsDate()
	@ApiProperty()
	updated_at: Date;

	@IsDate()
	@ApiProperty()
	deleted_at: Date;

	@IsString()
	@ApiProperty()
	identification: string;

	@IsString()
	@ApiProperty()
	phone: string;

	@IsString()
	@ApiProperty()
	address: string;

	@IsString()
	@ApiProperty()
	city: string;

	@IsString()
	@ApiProperty()
	state: string;

	@IsString()
	@ApiProperty()
	country: string;

	@IsString()
	@ApiProperty()
	zip_code: string;

	@IsString()
	@ApiProperty()
	role: string;

	@IsBoolean()
	@ApiProperty()
	status: boolean;

	@IsString()
	@ApiProperty()
	avatar: string;
}

export class UserRequest {
	@IsString()
	@IsEmail()
	@ApiProperty()
	email: string;

	@IsString()
	@ApiProperty()
	first_name: string;

	@IsString()
	@ApiProperty()
	last_name: string;

	@IsString()
	@ApiProperty()
	password: string;

	@IsString()
	@ApiProperty()
	identification: string;

	@IsString()
	@ApiProperty()
	phone: string;

	@IsString()
	@ApiProperty()
	address: string;

	@IsString()
	@ApiProperty()
	city: string;

	@IsString()
	@ApiProperty()
	state: string;

	@IsString()
	@ApiProperty()
	country: string;

	@IsString()
	@ApiProperty()
	zip_code: string;

	@IsString()
	@ApiProperty()
	role: string;

	@IsBoolean()
	@ApiProperty()
	status: boolean;

	@IsString()
	@ApiProperty()
	avatar: string;
}
