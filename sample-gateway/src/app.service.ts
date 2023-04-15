import { Inject, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/createProject.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProjectEvent } from './event/createProject.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('PROJECT') private readonly projectClient: ClientProxy,
    @Inject('USER') private readonly userClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Happy Coding!';
  }

  //To demonstrate event emit method
  createProject(payload: CreateProjectDto) {
    //Create event to communicate with project service using injection token
    this.projectClient.emit('create_project', new CreateProjectEvent(payload));
  }

  //To demonstrate message emit method
  getUser(payload: any) {
    //fetch user data from user microservice
    return this.userClient.send({ cmd: 'get_user' }, payload);
  }
}
