import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './common/config/config.module';
import { DatabaseModule } from './common/database/database.module';
// import { LevelsModule } from './modules/levels-r/levels.module';
import { LevelsModule } from './modules/levels/levels.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SubjectsModule } from './modules/subjects/subjects.module';
import { LessonsModule } from './modules/lessons/lessons.module';

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // playground: false,
    }),

    DatabaseModule,
    LevelsModule,
    SubjectsModule,
    LessonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
