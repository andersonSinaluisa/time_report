import { User } from "@prisma/client";
import { UserResponseDto } from "../dto/user.dto";

export class UserAdapter {

    
    static fromUserResponseToUser(userRequest: UserResponseDto): User {
        return userRequest as User;
    }

    static fromUserResponseManyToUserMany(userRequest: UserResponseDto[]): User[] {
        return userRequest as User[];
    }

    static fromUserToUserResponse(user: User): UserResponseDto {
        return user as UserResponseDto;
    }

    static fromUserManyToUserResponseMany(user: User[]): UserResponseDto[] {
        const data = user.map((item) => {
            return {
                id: item.id,
                address: item.address,
                avatar: item.avatar,
                city: item.city,
                country: item.country,
                created_at: item.created_at,
                deleted_at: item.deleted_at,
                email: item.email,
                first_name: item.first_name,
                identification  : item.identification,
                last_name: item.last_name,
                phone: item.phone,
                role: item.role,
                state: item.state,
                status: item.status,
                updated_at: item.updated_at,
                zip_code: item.zip_code,
            } as UserResponseDto;
        });
        return data as UserResponseDto[];
    }

    static fromUserResponseToUserResponseDto(user: UserResponseDto): UserResponseDto {
        return user as UserResponseDto;
    }
}
