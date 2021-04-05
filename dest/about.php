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
        <header>
            <?php include 'html/header.html' ?>
        </header>
        <hr class="seperator"> 
        <div class="mobile-menu">
            <?php include 'html/mobile-menu.html' ?>
        </div>
        <main>
            <div class="developers">
                <!-- React -->
            </div>
        </main>
        <hr class="seperator">
        <footer>
            <?php include 'html/footer.html' ?>
        </footer>
    </div>
    <!-- CSS Libs -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/about.min.css">
    <!-- JS Libs-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" crossorigin="anonymous"></script>
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <!-- JS Files -->
    <script src="js/lib/script/resizeload.js"></script>
    <script type="text/babel" src="js/about.js"></script>
</body>
</html>