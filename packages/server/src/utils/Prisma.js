var Prisma = require('@prisma/client');

const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

module.exports = prisma;