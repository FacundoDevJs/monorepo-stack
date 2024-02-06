import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string; user: User }> {
    const user = await this.usersService.getUserByEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user,
    };
  }

  async register(
    email: string,
    pass: string,
  ): Promise<{ access_token: string; user: User }> {
    const user = await this.usersService.createUser({
      email,
      password: pass,
    });
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user,
    };
  }
}
