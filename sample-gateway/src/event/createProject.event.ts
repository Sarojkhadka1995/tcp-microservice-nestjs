import { CreateProjectDto } from 'src/dto/createProject.dto';

export class CreateProjectEvent {
  constructor(public readonly payload: CreateProjectDto) {}
}
