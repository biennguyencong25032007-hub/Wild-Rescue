import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: any) {
    // Implementation
    return { message: 'User registered successfully' };
  }

  async login(loginDto: any) {
    // Implementation
    return { token: 'jwt_token', user: {} };
  }

  async validateUser(email: string, password: string) {
    // Implementation
    return null;
  }
}
