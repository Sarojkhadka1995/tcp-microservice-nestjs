import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Response } from 'express';

//SERVICES
import { ProjectService } from './project.service';
import { AddProjectDTO } from './dto/addProject.dto';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  @ApiOkResponse({ description: 'Retrive success' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  async getProjectList(@Res() response: Response) {
    try {
      return response
        .status(HttpStatus.OK)
        .json(await this.projectService.getAllProject());
    } catch (e) {
      throw new HttpException(
        'Something went wrong fetching projects',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post()
  @ApiOkResponse({ description: 'Add Success' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  async addProject(@Body() payload: AddProjectDTO, @Res() response: Response) {
    try {
      return response
        .status(HttpStatus.OK)
        .json(await this.projectService.addProject(payload));
    } catch (e) {
      throw new HttpException(
        'Something went wrong fetching projects',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
