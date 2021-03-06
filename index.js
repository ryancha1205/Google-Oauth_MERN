const express = require('express');
const mongoose = require('mongoose');
const cookieSession =require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');
require('./models/Survey');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });
const app = express();

app.use(bodyParser.json()); //req.body를 쓸수있게 해준다.
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

//to make sure production environment
if(process.env.NODE_ENV==="production"){
  //Express will serve up production assets
  // like out main.js file, or main.css file!
  app.use(express.static('client/build'));
  //Express will serve up the index.html file
  //if it doesn't recognize the route
  const path =require('path');
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
}

const PORT = process.env.PORT||5000;
app.listen(PORT);
