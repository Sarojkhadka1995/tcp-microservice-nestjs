import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

//INTERFACES
import { IProject } from './interfaces/project';
import { AddProjectDTO } from './dto/addProject.dto';

@Injectable()
export class ProjectService {
  constructor(@InjectModel('Project') public projectModel: Model<IProject>) {}

  getAllProject = async () => {
    try {
      const project = await this.projectModel.find();
      return project;
    } catch (e) {
      throw new NotFoundException('Something went wrong fetching projects');
    }
  };

  addProject = async (payload: AddProjectDTO) => {
    try {
      const createdUser = new this.projectModel(payload);
      return await createdUser.save();
    } catch (e) {
      throw new NotFoundException('Something went wrong adding projects');
    }
  };
}
