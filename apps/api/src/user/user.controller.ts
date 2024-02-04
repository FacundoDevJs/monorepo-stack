import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() data: User) {
    return this.userService.createUser(data);
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    const userFound = await this.userService.getUserById(Number(id));
    if (!userFound) throw new NotFoundException('Usuario no encontrado');
    return userFound;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    try {
      return this.userService.deleteUser(Number(id));
    } catch (error) {
      throw new NotFoundException('Usuario no encontrado');
    }
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: User) {
    try {
      return this.userService.updateUser(Number(id), data);
    } catch (error) {
      throw new NotFoundException('Usuario no encontrado');
    }
  }
}
