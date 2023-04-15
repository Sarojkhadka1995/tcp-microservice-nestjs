import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Happy Coding!';
  }

  getAnalytics() {
    return 'Saroj';
  }
}
