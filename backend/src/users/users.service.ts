import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // constructor(private _prisma: PrismaService) {}

  create(_createUserDto: any) {
    // Implementation
    return { message: 'User created' };
  }

  findAll() {
    // Implementation
    return [];
  }

  findOne(_id: string) {
    // Implementation
    return null;
  }

  update(_id: string, _updateUserDto: any) {
    // Implementation
    return { message: 'User updated' };
  }

  remove(_id: string) {
    // Implementation
    return { message: 'User removed' };
  }
}
