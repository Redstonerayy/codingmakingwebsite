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
            <?php
                use PHPMailer\PHPMailer\PHPMailer;
                use PHPMailer\PHPMailer\SMTP;
                use PHPMailer\PHPMailer\Exception;
                
                //Load Composer's autoloader
                require 'vendor/autoload.php';

                /*
                $mail = new PHPMailer(true);

                try {
                    //its now working without STARTTLS
                    //is sure different on other pcs because of other credentials and servers


                    //Server settings
                    //$mail->SMTPDebug = SMTP::DEBUG_CONNECTION;                      //Enable verbose debug output
                    $mail->isSMTP();                                            //Send using SMTP
                    $mail->Host       = 'localhost';                     //Set the SMTP server to send through
                    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                    $mail->Username   = 'test@test.com';                     //SMTP username
                    $mail->Password   = 'test';                               //SMTP password
                    //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

                    //Recipients
                    $mail->setFrom('test@test.com', 'Mailer');
                    $mail->addAddress('anton.paul.rodenwald@iserv-schillerschule.de', 'Joe User');     //Add a recipient

                    //Content
                    $mail->isHTML(true);                                  //Set email format to HTML
                    $mail->Subject = 'Here is the subject';
                    $mail->Body    = 'This is the HTML message body <b>in bold!</b><script>alert("test")</script>';
                    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

                    $mail->send();
                    echo 'Message has been sent';
                } catch (Exception $e) {
                    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
                }
                */

                $nameerr = "";
                $emailerr = "";
                $messageerr = "";
                
                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                    $valid = true;

                    //check if valid
                    $name = test_input($_POST["name"]);
                    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
                        $nameerr = "Only letters and white space allowed!";
                        $valid = false;
                    }
                    $email = test_input($_POST["email"]);
                    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        $emailerr = "Invalid email format!";
                        $valid = false;
                    }
                    $message = test_input($_POST["message"]);
                    if(strlen($message) < 40){
                        $messageerr = "Message to short, please be more precise!";
                        $valid = false;
                    }

                    if($valid){
                        //send email
                        include 'html/feedback.html';
                    }
                }
                    
                function test_input($data) {
                    $data = trim($data);
                    $data = stripslashes($data);
                    $data = htmlspecialchars($data);
                    return $data;
                }

            ?>
            <div class="contact-form">
                <form class="form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">
                    <input name="name" class="name inputstyle" type="text" placeholder="Name" autocomplete="off" required>
                    <?php echo $nameerr?>
                    <input name="email" class="email inputstyle" type="text" placeholder="E-Mail" autocomplete="off" required>
                    <?php echo $emailerr?>
                    <textarea name="message" class="message inputstyle" cols="0" rows="0" placeholder="Was willst du uns mitteilen?" autocomplete="off" required></textarea>
                    <?php echo $messageerr?>
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
    <script src="js/contact.js"></script>
</body>
</html>
