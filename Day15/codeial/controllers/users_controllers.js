module.exports.signIn = function (req, res) {
  return res.render("signIn", { title: "My SignIn Page" });
};

module.exports.signUp = function (req, res) {
  return res.render("signUp", { title: "My SignUp Page" });
};
