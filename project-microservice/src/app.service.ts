import { Injectable } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateProjectEvent } from './events/createProject.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Happy Coding!';
  }

  handleCreateProject(payload: CreateProjectEvent) {
    console.log('Inside handle Create Project', payload);
  }
}
