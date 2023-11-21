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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
