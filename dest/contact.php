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
            <div class="contact-form">
                <form action="" method="POST">
                    <input name="email" class="name inputstyle" type="text" placeholder="Name" autocomplete="off">
                    <input name="email" class="email inputstyle" type="text" placeholder="E-Mail" autocomplete="off">
                    <textarea name="message" class="message inputstyle" cols="0" rows="0" placeholder="Was willst du uns mitteilen?"></textarea>
                    <button class="submit" type="submit">Submit</button>
                </form>
            </div>
        </main>
        <hr class="seperator">
        <hr class="seperator">
        <?php include 'html/footer.html' ?>
    </div>
    <!-- CSS Libs -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/contact.min.css">
    <!-- JS Libs-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" crossorigin="anonymous"></script>
    <!-- JS Files -->
    <script src="js/lib/script/resize.js"></script>
</body>
</html>
