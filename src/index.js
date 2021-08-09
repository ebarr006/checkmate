import express from 'express';
import Prisma from '@prisma/client';
import users from './routes/users.js';
import games from './routes/games.js';

const { PrismaClient } = Prisma;
const prisma = new PrismaClient();


const app = express();
const port = 3000; // MOVE THIS TO ENV FILE


app.get('/', (req, res) => {
  res.send('Server Onlineee');
});

app.use('/api', users);
app.use('/api', games);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})