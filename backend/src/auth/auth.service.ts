import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    // private readonly _prisma: PrismaService,
    // private readonly _jwtService: JwtService,
  ) {}

  async register(_registerDto: any) {
    // Implementation
    return { message: 'User registered successfully' };
  }

  async login(_loginDto: any) {
    // Implementation
    return { token: 'jwt_token', user: {} };
  }

  async validateUser(_email: string, _password: string) {
    // Implementation
    return null;
  }
}
