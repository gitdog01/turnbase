import { Injectable } from '@nestjs/common';
import { ViewUserDto } from '../dto/view-user.dto';

@Injectable()
export class UsersService {
  getCurrentUser(): ViewUserDto {
    return {
      name: 'John Doe',
      email: '',
    };
  }

  login(): boolean {
    return true;
  }

  logout(): boolean {
    return true;
  }

  register(): boolean {
    return true;
  }
}
