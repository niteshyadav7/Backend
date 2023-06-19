module.exports.home = function (req, res) {
  console.log(req.cookies);
  res.cookie("users_id", 23);
  res.cookie("user", 343);
  return res.render("home", { title: "My Home Page" });
};
