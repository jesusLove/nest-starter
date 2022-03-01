import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}
  // 查询全部用户
  findAll() {
    return this.usersRepository.find();
  }
  // 创建用户
  create(createUserDto: CreateUserDto) {
    try {
      const user = this.usersRepository.create(createUserDto);
      return this.usersRepository.save(user);
    } catch (err) {
      throw new BadRequestException(`username is unique`);
    }
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`Not found  $${id}`);
    }
    return user;
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    return this.usersRepository.remove(user);
  }

  async findByName(username: string) {
    const [user] = await this.usersRepository.find({
      where: { username },
      take: 1
    });
    if (!user) {
      throw new NotFoundException('Not found user');
    }
    return user;
  }
}
