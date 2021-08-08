import express from 'express'
import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

const prisma = new PrismaClient()
const app = express()

const port = 3000;

app.get('/', (req, res) => {
  res.send('Server Onlineee');
})
// 503ebf03-a186-4440-8480-641a09d961ce - emilio
// 542e2d91-1aad-4b54-9d69-cd2571d6bf1d - jasmine

app.get('/users', async (req, res) => {
  const users = await prisma.users.findMany({
    where: {
      username: 'emilio'
    },
    include: {
      gamesLost: true
    }
  });
  res.json(users);
})

app.post('/add-game', async (req, res) => {
  const game = await prisma.games.create({
    data: {
      winnerId: '503ebf03-a186-4440-8480-641a09d961ce',
      loserId: '542e2d91-1aad-4b54-9d69-cd2571d6bf1d',
      num_moves: 9,
    }
  });
  res.json(game);
})

app.get('/games', async (req, res) => {
  const games = await prisma.games.findMany({});
  res.json(games);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})