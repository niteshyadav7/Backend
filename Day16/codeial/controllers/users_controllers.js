const User = require("../models/user");

module.exports.signIn = function (req, res) {
  return res.render("signIn", { title: "My SignIn Page" });
};

module.exports.signUp = function (req, res) {
  return res.render("signUp", { title: "My SignUp Page" });
};

module.exports.create = function(req, res){
  if (req.body.password != req.body.confirm_password){
      return res.redirect('back');
  }

  User.findOne({email: req.body.email}, function(err, user){
      if(err){console.log('error in finding user in signing up'); return}

      if (!user){
          User.create(req.body, function(err, user){
              if(err){console.log('error in creating user while signing up'); return}

              return res.redirect('/users/sign-in');
          })
      }else{
          return res.redirect('back');
      }

  });
}

module.exports.create = function (req, res) {
  // to do later
};
