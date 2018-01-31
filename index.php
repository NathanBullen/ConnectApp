<head>
    <link rel="stylesheet" href="css/style.css?v=<?=time();?>">
</head>
<body>
<!-- Loading the scripts-->
  <script type="text/javascript" src="https://code.jquery.com/jquery-1.9.1.js"></script>
  <script src="js/topic.js"></script>
<!-- The horizontal header across the top of the page, includes the logo and the profile (Dummy)-->
  <div id="header">
    <div id="logo">
      <img class="imagelogo" src="https://www.connecteducation.com.au/assets/logo_black-97c14e77ecec2c4624b560c20c53df78b1d81159eb0fd1f2ca7040f4e289a209.png" alt="Connect App"></img>
    </div>
    <div id="login">
      <img class="profile" src="https://www.mathlearningcenter.org/sites/default/files/images/profile-blank.png" alt="Profile Picture"></img>
    </div>
  </div>
<!-- Header end -->
<!-- Side menu, includes Home, Topics and questions-->
  <div id="menu">
    <div id="home">
      <i class="fa fa-home lefticon" aria-hidden="true"></i>Home
    </div>
    <div id="topics">
      <i class="fa fa-list-ul lefticon" aria-hidden="true"></i>Topics<i class="fa fa-angle-right righticon" aria-hidden="true"></i>
      <ul id="topics-sub">
        <li><a href="#">Chemistry</a></li>
        <li><a href="#">Biology</a></li>
        <li><a href="#">Physics</a></li>
        <li><a href="#">Psychology</a></li>
      </ul>
    </div>
    <div id="pratice-quiz">
    </div>
  </div>
</body>