import { Module } from '@nestjs/common';
import { UserResponsesService } from './response.service';
import { UserResponsesResolver } from './response.resolver';
import { UserResponsesRepository } from './response.repository';

@Module({
  providers: [
    UserResponsesResolver,
    UserResponsesService,
    UserResponsesRepository,
  ],
})
export class UserResponsesModule {}
