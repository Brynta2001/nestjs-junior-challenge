import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { ValidateUserDto } from './dto/validate-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('validate')
  validateUser(@Body() validateUserDto: ValidateUserDto) {
    return this.usersService.validateUser(validateUserDto);
  }
}