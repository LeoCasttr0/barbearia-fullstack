// quando eu salvar minha aplicação do Next ele ja faz o reloud da minha aplicação

import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient;
}
// so vai rodar uma conexão com o banco
let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
