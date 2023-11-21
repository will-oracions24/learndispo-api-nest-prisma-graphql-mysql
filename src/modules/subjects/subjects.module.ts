import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsResolver } from './subjects.resolver';
import { SubjectRepository } from './subjects.repository';

@Module({
  providers: [SubjectsResolver, SubjectsService, SubjectRepository],
})
export class SubjectsModule {}
