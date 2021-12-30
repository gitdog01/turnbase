import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRequestDto } from '../dto/user.request.dto';
import { ViewUserDto } from '../dto/view-user.dto';
import { User } from './users.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModal: Model<User>,
  ) {}

  getCurrentUser(): ViewUserDto {
    return {
      name: 'John Doe',
      email: '',
    };
  }

  async login(body: UserRequestDto): Promise<boolean> {
    const { email, password } = body;
    const user = await this.userModal.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid password');
    }
    return true;
  }

  logout(): boolean {
    return true;
  }

  async register(body: UserRequestDto) {
    const { name, email, password } = body;
    const isExistEmail = await this.userModal.findOne({ email });
    if (isExistEmail) {
      throw new UnauthorizedException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModal.create({
      name,
      email,
      password: hashedPassword,
    });

    return user.readOnlyData;
  }
}
