import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../common/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {}

  async findAll() {
    return await this.user.find();
  }
  async find(id: number) {
    return await this.user
      .createQueryBuilder()
      .where('id=:id', { id })
      .getOne();
  }
  async insert(createDto: CreateUserDto) {
    return await this.user
      .createQueryBuilder()
      .insert()
      .values({
        ...createDto,
        create_time: Date.now(),
      })
      .execute();
  }
  async update(
    createDto: CreateUserDto,
    id: number,
    name: string,
    age: number,
    test: string,
  ) {
    const res = await this.user
      .createQueryBuilder()
      .update(createDto)
      .where('id=:id', { id })
      .execute();
    return res;
  }
  async delete(id: number) {
    return await this.user
      .createQueryBuilder()
      .delete()
      .where('id=:id', { id })
      .execute();
  }
}
