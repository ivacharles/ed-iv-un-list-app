
const express = require('express');
// const exphbs = require('express-handlebars');
const bodyParse = require('body-parser');
const path = require('path');

const db = require('./config/database');
const jobs = require('./models/jobs');
const user = require('./models/user');
// handlebars
// app.engine('handlebars',exphbs({defaultlayout:'main' }));
// app.engine('view engine', 'handlebars');
/// test db
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('error' + err))

// const morgan = require('morgan');
const app = express();
// jobs routes
app.use( '/jobs', require('./routes/jobs'));
app.use( '/user', require('./routes/user'));

// app.get('/', (req,res) => res.send('INDEX'));
// app.get('/', (req, res) => {
//  jobs.findAll().then(jobs => res.send(jobs));

// });

// app.get('/', (req, res) => {

//   user.findAll().then(user => res.send(user));
//  });

 app.get('/', (req, res) => {
  try{
    user.findAll().then(user => res.send(user));
  
  }
  catch{
    console.log("sorry database dont exist");
  }


 });


const PORT = process.env.PORT || 5000 ;

// this lets us parse 'application/json' content in http requests
// app.use(express.json());


// app.use('/api', require('./controllers'));
// // add http request logging to help us debug and audit app use
// const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
// app.use(morgan(logFormat));

// // this mounts controllers/index.js at the route `/api`
// app.use('/api', require('./controllers'));

// // for production use, we serve the static react build folder
// if(process.env.NODE_ENV==='production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));

//   // all unknown routes should be handed to our react app
//   app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//   });
// }

// // update DB tables based on model updates. Does not handle renaming tables/columns
// // NOTE: toggling this to true drops all tables (including data)
// db.sequelize.sync({ force: false });

// start up the server
if(PORT) {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} else {
  console.log("===== ERROR ====\nCREATE A .env FILE!\n===== /ERROR ====")
}