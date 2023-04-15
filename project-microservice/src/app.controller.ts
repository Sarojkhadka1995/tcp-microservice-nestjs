import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateProjectEvent } from './events/createProject.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('create_project')
  handleCreateProject(data: CreateProjectEvent) {
    this.appService.handleCreateProject(data);
  }
}
