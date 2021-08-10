"use strict";

var Prisma = require('@prisma/client');

var PrismaClient = Prisma.PrismaClient;
var prisma = new PrismaClient();
module.exports = prisma;