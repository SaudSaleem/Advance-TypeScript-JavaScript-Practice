
var http = require('http');
const express = require('express')
 var userRoutes = require('./routes/userRoutes');
const app = express();
app.use(express.json())

const port = process.env.port || 3000;
app.get('/', (req, res) => {
  res.send('Hello World! This is root route')
});
app.use('/api/user',userRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
