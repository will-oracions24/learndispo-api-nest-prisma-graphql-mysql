import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Subject } from './entities/subject.entity';
import { CreateSubjectInput } from './dto/create-subject.input';
import { UpdateSubjectInput } from './dto/update-subject.input';
import { SubjectsService } from './subjects.service';

@Resolver(() => Subject)
export class SubjectsResolver {
  constructor(private readonly service: SubjectsService) {}

  @Mutation(() => Subject)
  createSubject(
    @Args('createSubjectInput') createSubjectInput: CreateSubjectInput,
  ) {
    return this.service.create(createSubjectInput);
  }

  @Query(() => [Subject], { name: 'subjects' })
  findAll() {
    return this.service.getMany();
  }

  @Query(() => Subject, { name: 'subject' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.service.getOne(id);
  }

  @Mutation(() => Subject)
  updateSubject(
    @Args('updateSubjectInput') updateSubjectInput: UpdateSubjectInput,
  ) {
    return this.service.update(updateSubjectInput);
  }

  @Mutation(() => Subject)
  removeSubject(@Args('id', { type: () => String }) id: string) {
    return this.service.delete(id);
  }
}
