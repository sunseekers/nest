import {
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  @Get()
  async findAll() {
    const res = await this.userService.findAll();
    return {
      code: 0,
      msg: '获取数据成功',
      data: res,
    };
  }

  @Get('/:id')
  async find(@Param('id') id: number) {
    const res = await this.userService.find(id);
    if (!res) return;
    return {
      code: 0,
      msg: '获取数据成功',
      data: res,
    };
  }
  @Post('/updata/:id')
  async update(@Param('id') id: number, @Query() params) {
    const name = 'name';
    const age = 9;
    const res = await this.userService.update(params, id, name, age, '90');
    if (!res) return;
    return {
      code: 0,
      msg: '数据更新成功',
    };
  }
  @Post('/insert')
  async insert(@Query() params) {
    const res = await this.userService.insert(params);
    if (!res) return;
    return {
      code: 0,
      msg: '插入数据成功',
    };
  }

  @Delete('/delete/:id')
  async delect(@Param('id') id: number) {
    const res = await this.userService.delete(id);
    if (!res) return;
    return {
      code: 0,
      msg: '删除数据成功',
      data: res,
    };
  }
}
