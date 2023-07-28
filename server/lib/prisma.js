import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
  // In a production environment, always create a new Prisma client
  prisma = new PrismaClient();
} else {
  // In a development environment, use a globally cached Prisma client if it exists
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
