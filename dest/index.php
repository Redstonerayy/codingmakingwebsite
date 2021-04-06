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
            <div class="catchphrase-div">
                <p class="catchphrase">Build awesome things</p>
                <img class="banner-img" src="img/bannerslim.png" alt="">
            </div>
            <div class="content">
                <div class="target-group">
                    <div class="img-laptop-pupil">
                        <img src="img/girlblocklaptop.jpeg" alt="">
                    </div>
                    <div class="content-text who-text">
                        
                    </div>
                    <div class="content-text">

                    </div>
                </div>
                <div class="learn">
                    <div class="technology-slide-show slideshow-container">
                        <a id="prev">&#10094;</a>
                        <a id="next">&#10095;</a>
                    </div>
                    <div class="content-text learn-text">
                        
                    </div>
                    <div class="content-text">

                    </div>
                </div>
            </div>
        </main>
        <hr class="seperator">
        <hr class="seperator">
        <?php include 'html/footer.html' ?>
    </div>
    <!-- CSS Libs -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/index.min.css">
    <!-- JS Libs-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" crossorigin="anonymous"></script>
    <!-- JS Files -->
    <script src="js/lib/def/slideshow.js"></script>
    <script src="js/lib/script/resizeload.js"></script>
    <script src="js/index.js"></script>
</body>
</html>