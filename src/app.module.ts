import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { DatabaseModule } from './database/database.module';
import { QuizModule } from './quiz/quiz.module';
import { UserModule } from './user/user.module';
import { ClassModule } from './class/class.module';

@Module({
  imports: [QuestionModule, DatabaseModule, QuizModule, UserModule, ClassModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
