<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Android Exploit Tool</title>
    <link rel="stylesheet" href="./bootstrap/css/bootstrap.css" >
    <link rel="stylesheet" type="text/css" href="./css/theme.css" >
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/jquery.cookie.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/md5.js"></script>
  </head>
  <body class="main-bg">
    <p class="text-primary" style="float:right">earthshakira</p>
    <div class="container main-bg">
      <div class="well login">
        <h3 class="text-default text-center">Android Exploit Tool</h3>
        <img src="./img/logo.jpg" class="main-logo"/>
        <div class="form-group">
        <label>Username</label>
          <input type="email" class="form-control" placeholder="Username" id="user_name">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password" id="password">
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" id="remember_me"> Remember Me
          </label>
        </div>
        <div class="alert alert-success" style="display:none;margin:20px" id="response">
          <p>
            <strong id="status">Done</strong>
            <span id="message">Added</span>
          </p>
        </div>
        <button type="submit" class="btn btn-primary center" id="submit">Submit</button>
      </div>
    </div>
  </body>
</html>
