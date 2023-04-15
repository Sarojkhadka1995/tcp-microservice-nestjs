import { AddProjectDTO } from 'src/project/dto/addProject.dto';

export class CreateProjectEvent {
  constructor(public readonly payload: AddProjectDTO) {}
}
