//prod.js - production keys here!
module.exports = {
  //PULL FROM HEROKU ENVIRONMENT VARIABLES
   googleClientID: process.env.GOOGLE_CLIENT_ID,
   googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
   mongoURI:process.env.MONGO_URI,
   cookieKey: process.env.COOKIE_KEY
   //need to flip over to heroku and set up all these
   //environment variables
};
