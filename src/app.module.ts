import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './common/config/config.module';
import { DatabaseModule } from './common/database/database.module';
import { LevelsModule } from './modules/levels-r/levels.module';

@Module({
  imports: [ConfigModule, DatabaseModule, LevelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
