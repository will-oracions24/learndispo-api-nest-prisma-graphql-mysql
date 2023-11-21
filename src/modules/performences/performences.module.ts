import { Module } from '@nestjs/common';
import { PerformancesService } from './performences.service';
import { PerformancesResolver } from './performences.resolver';
import { PerformancesRepository } from './performences.repository';

@Module({
  providers: [
    PerformancesResolver,
    PerformancesService,
    PerformancesRepository,
  ],
})
export class PerformancesModule {}
