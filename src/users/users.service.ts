import { Injectable, Inject, NotFoundException,BadRequestException} from '@nestjs/common';
import { User } from './interfaces/user.interface';
// import { CreateUserDto } from './dtos/createUser.dto';
import { UsersModule } from './users.module';
import { Db, ObjectID } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) {} 
  

async find(): Promise<User[]> {
  return await this.db.collection('users').find().toArray();
}

async findOne(id: string): Promise<User> {
  if (!ObjectID.isValid(id)) {
    throw new BadRequestException;
  }

  const response = await this.db.collection('users').findOne({
    _id: new ObjectID(id),
    
  });

  if (!response) {
    throw new NotFoundException;
  }

  return response;
}

 
  // async create(createUserDto): Promise<void> {
  // return this.db.collection('users').insert(createUserDto);
  // }

 
  }

 