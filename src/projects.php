<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="img/codingtag.jpg">
    <title>Coding & Making</title>
</head>
<body>
    <!-- PRELOADER-->
    <div class="preloader">
        <p>Page is Loading</p>
        <div class="preloader-animation"></div>
    </div>
    <link rel="stylesheet" href="css/preloader.min.css">
    <!-- MAIN PAGE-->
    <div class="page" hidden>
        <?php include 'html/header.html' ?>
        <hr class="seperator"> 
        <?php include 'html/mobile-menu.html' ?>
        <main>
            <div class="project-selection">
                <p class="headline-projects">Projects</p>
                <div class="projects-container">

                </div>
            </div>
            <div class="projects">
                <iframe class="frame" src="" frameborder="0"></iframe>
            </div>
        </main>
        <hr class="seperator">
        <hr class="seperator">
        <?php include 'html/footer.html' ?>
    </div>
    <!-- CSS Libs -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/projects.min.css">
    <!-- JS Libs-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" crossorigin="anonymous"></script>
    <!-- JS Files -->
    <script src="js/lib/script/resize.js"></script>
    <script src="js/projects.js"></script>
</body>
</html>