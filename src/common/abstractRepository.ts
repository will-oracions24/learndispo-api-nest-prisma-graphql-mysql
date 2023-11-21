// import { Prisma } from '@prisma/client'; // Assure-toi d'importer le type Prisma correctement
// import { DatabaseService } from './database/database.service';

// export class CrudService<T> {
//   constructor(private readonly databaseService: DatabaseService,
//      private readonly modelName: string) {}

//   async create(data: Prisma[${T}CreateInput]) {
//     return this.databaseService[this.modelName].create({ data });
//   }

//   async findAll() {
//     return this.databaseService[this.modelName].findMany();
//   }

//   async findOne(id: string) {
//     return this.databaseService[this.modelName].findUnique({ where: { id } });
//   }

//   async update(id: string, data: Prisma[${T}UpdateInput]) {
//     return this.databaseService[this.modelName].update({ where: { id }, data });
//   }

//   async remove(id: string) {
//     return this.databaseService[this.modelName].delete({ where: { id } });
//   }
// }
