import { Module, OnModuleInit } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    this.$connect();
  }
}
