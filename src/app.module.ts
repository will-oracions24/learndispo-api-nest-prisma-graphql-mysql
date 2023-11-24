import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './common/config/config.module';
import { DatabaseModule } from './common/database/database.module';
import { LevelsModule } from './modules/levels/levels.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SubjectsModule } from './modules/subjects/subjects.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { PerformancesModule } from './modules/performences/performences.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { RevisionsModule } from './modules/revisions/revisionSessions.module';
import { UserResponsesModule } from './modules/userResponse/response.module';
import { QuestionTypesModule } from './modules/questionTypes/questionTypes.module';
import { AnswerOptionsModule } from './modules/answers/answers.module';
import { UsersModule } from './modules/users/users.module';
import { ExercisesModule } from './modules/exercises/exercises.module';

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
    PerformancesModule,
    QuestionsModule,
    RevisionsModule,
    UserResponsesModule,
    QuestionTypesModule,
    AnswerOptionsModule,
    UsersModule,
    ExercisesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
