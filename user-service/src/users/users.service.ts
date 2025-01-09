import { Injectable } from '@nestjs/common';
import { ValidateUserDto } from './dto/validate-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(validateUserDto: ValidateUserDto) {
    const { id } = validateUserDto;
    const userExists = this.userRepository.exists({ where: { id } });
    return await userExists;
  }
}
