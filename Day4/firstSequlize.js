
var http = require('http');
const usersModel = require('./models').User;
http.createServer(async function (req, res) {
  console.log('hello my first node program')  
  if(req.url === '/getUsersData')
  {
    let users = await usersModel.findAll();
    console.log('users',JSON.stringify(users, null, 4))
    res.write('data get see console')
    res.end();
  }
  else if(req.url === '/postUsersData')
  {
    await usersModel.create({ firstName: "saud", lastName: "saleem", email: 'saudsaleem@gmail.com' });
    res.write('data updated'),
    res.end();
  } 
}).listen(8080);