import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Lesson } from './entities/lesson.entity';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { LessonsService } from './lessons.service';

@Resolver(() => Lesson)
export class LessonsResolver {
  constructor(private readonly service: LessonsService) {}

  @Mutation(() => Lesson)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.service.create(createLessonInput);
  }

  @Query(() => [Lesson], { name: 'lessons' })
  findAll() {
    return this.service.getMany();
  }

  @Query(() => Lesson, { name: 'lesson' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.service.getOne(id);
  }

  @Mutation(() => Lesson)
  updateLesson(
    @Args('updateLessonInput') updateLessonInput: UpdateLessonInput,
  ) {
    return this.service.update(updateLessonInput);
  }

  @Mutation(() => Lesson)
  removeLesson(@Args('id', { type: () => String }) id: string) {
    return this.service.delete(id);
  }
}
