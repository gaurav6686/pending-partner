import { Controller,Post,Get,Param,Body,Req,ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/createUser.dto';


@Controller('users')
export class UsersController {
constructor(private usersService: UsersService) {}


@Get()
  find(){
  return this.usersService.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.usersService.findOne(id);
  }


  // @Post()
  // async create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

 }