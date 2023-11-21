import { Module } from '@nestjs/common';
import { RevisionSessionsResolver } from './revisions.resolver';
import { RevisionSessionsService } from './revisions.service';
import { RevisionSessionsRepository } from './revisions.repository';

@Module({
  providers: [
    RevisionSessionsResolver,
    RevisionSessionsService,
    RevisionSessionsRepository,
  ],
})
export class RevisionsModule {}
