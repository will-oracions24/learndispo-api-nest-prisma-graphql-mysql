import { Injectable } from '@nestjs/common';
import { Subject } from '@prisma/client';
import { SubjectRepository } from './subjects.repository';
import { CreateSubjectInput } from './dto/create-subject.input';
import { UpdateSubjectInput } from './dto/update-subject.input';

@Injectable()
export class SubjectsService {
  constructor(private repository: SubjectRepository) {}

  public async getOne(id: string): Promise<Subject> {
    return await this.repository.getOne({
      where: { id },
    });
  }

  public async getMany(/*getSubjectsArgs */): Promise<Subject[]> {
    return await this.repository.getMany({
      // where: { toiletId: getSubjectsArgs.toiletId },
    });
  }

  public async create(createSubjectData: CreateSubjectInput): Promise<Subject> {
    const model = await this.repository.create({
      data: {
        ...createSubjectData,
      },
    });

    return model;
  }

  public async update(updateSubjectData: UpdateSubjectInput): Promise<Subject> {
    const model = await this.repository.update({
      where: { id: updateSubjectData.id },
      data: updateSubjectData,
    });

    return model;
  }

  public async delete(id: string): Promise<Subject> {
    const model = await this.repository.delete({
      where: { id },
    });

    return model;
  }
}
