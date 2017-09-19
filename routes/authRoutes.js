const passport = require('passport');


module.exports =(app)=>{
  app.get(
    "/auth/google",
    passport.authenticate('google', {
      scope: ['profile','email']
    })
  );

  app.get(
    "/auth/google/callback",
  passport.authenticate('google'));

  app.get('/api/logout',(req,res)=>{
    req.logout();  //by passport function
    res.send(req.user);  //be destoryed by passport
  });

  app.get('/api/current_user',(req,res)=>{
    res.send(req.user);
  });
};
