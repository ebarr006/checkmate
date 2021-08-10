var express = require('express');
var v1 = require('./routes/v1.js');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/v1', v1);
app.use(cors());

app.listen(port, () => {
  console.log(`Checkmate server listening at http://localhost:${port}`)
});

app.get('/', (req, res) => {
  res.send('Server Onlineee');
});