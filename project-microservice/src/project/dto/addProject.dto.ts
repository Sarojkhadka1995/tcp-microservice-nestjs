import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddProjectDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Project Name' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Owner id' })
  owner: string;
}
