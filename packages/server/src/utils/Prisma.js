var Prisma = require('@prisma/client');

const { PrismaClient } = Prisma;
const prisma = new PrismaClient({  log: ['query' ] });

module.exports = prisma;