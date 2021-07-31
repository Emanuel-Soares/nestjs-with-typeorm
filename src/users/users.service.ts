import { Repository, UpdateResult } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    try {
      return this.userRepository.save(createUserDto)
    } catch (err) {
      console.log(err)
      return null
    }
  }

  findAll(): Promise<User[]> {
    try {
      return this.userRepository.find()
    } catch (err) {
      console.log(err)
      return null
    }
  }

  findOne(id: string): Promise<User> {
    try {
      return this.userRepository.findOne(id)
    } catch (err) {
      console.log(err)
      return null
    }
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    try {
      return this.userRepository.update(id, updateUserDto)
    } catch (err) {
      console.log(err)
      return null
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.userRepository.delete(id)
    } catch (err) {
      console.log(err)
    }
  }
}
