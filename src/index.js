import express from 'express';
import v1 from './routes/v1.js';

const app = express();
const port = 3000; // MOVE THIS TO ENV FILE

app.get('/', (req, res) => {
  res.send('Server Onlineee');
});

app.use('/api/v1', v1);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})