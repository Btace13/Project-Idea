//Route Exception Handling 1
server.get("*", function(req, res, next) {
  let err = new Error();
  err.status = 404;
  next(err);
});

server.use(function(err, req, res, next) {
  if (err.status !== 404) {
    return next();
  }
  res.send("Page Not Found!");
});

//Duplicate Email Check Method 1
dp[0] == req.body.email;
