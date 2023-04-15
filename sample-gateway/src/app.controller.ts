import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProjectDto } from './dto/createProject.dto';
import { Response } from 'express';
import { GetUserDto } from './dto/getUser.dto';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() response: Response) {
    return response
      .status(HttpStatus.OK)
      .json({ message: this.appService.getHello() });
  }

  @Post('project')
  createProject(@Body() payload: CreateProjectDto) {
    this.appService.createProject(payload);
  }

  @Get('user/:id')
  getUserData(@Param('id') id: string): Observable<GetUserDto> {
    return this.appService.getUser(id);
  }
}
