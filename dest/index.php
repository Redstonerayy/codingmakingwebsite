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
                        <div class="text">
                            Bei der Coding & Making AG ist jeder willkommen, der sich für MINT interessiert.<br>
                            Man kann frei und selbstständig mit anderen an Projekten arbeiten
                            und sich weiterentwickeln.<br>
                            Ob Einsteiger oder schon etwas erfahrender,
                            hier kann jeder seine Ideen umsetzen. <br>
                            Hier findet man gleichgesinnte und lernt viele neue Dinge. 
                            Man kann sich mit Mitschülern austauschen und sich gegenseitig neue
                            Dinge zeigen. <br>
                            Dabei herscht eine chillige Atmosphäre in der man in Ruhe 
                            basteln und werkeln kann. <br> 
                            Die AG wird von Frau Ziegenmeyer geleitet
                            und findet am <b>Donnerstag in A3 von 13:45 bis 15:15</b> statt.
                        </div>
                    </div>
                    <div class="content-text who-video">
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/iJ18TIki0r4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div class="learn">
                    <div class="technology-slide-show slideshow-container">
                        <a id="prev">&#10094;</a>
                        <a id="next">&#10095;</a>
                    </div>
                    <div class="content-text learn-text">
                        In der Coding & Making kann man viele verschiedene Dinge lernen
                        und gemeinsam Projekte umsetzen. Zuerst ist da natürlich das Coden bzw.
                        Program- mieren in verschiedenen Programmiersprachen aber auch
                        andere Dinge, die mit Computern zutun haben, wie das Modellieren von
                        3D Objekten.<br> 
                        Dabei kann man viele verschiedene Dinge kreieren, wie
                        eigene Spiele, oder Computerprogramme, die Dinge automatisieren.<br> 
                        Man kann alles umsetzen, was man sich vorstellen kann, 
                        euren Vorstellungen sind keine Grenzen gesetzt.
                        Besonders viele haben sich in der AG mit Python und Javascript beschäftigt.
                    </div>
                    <div class="content-text learn-video">
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hnPv77UrSKI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
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