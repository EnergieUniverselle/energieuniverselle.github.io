<?php
    // if(isset($_POST['name']) && isset($_POST['mail']) && isset($_POST['company']) && isset($_POST['msg']))
    // {
        
        $destino = 'alessiauribecolunga@gmail.com';
        $asunto = 'Mensaje desde mi sitio web';
        print_r ('destino y asunto listo');
        log("destino y asutno listo");

        $nombre = $_POST['name'];
        $correo = $_POST['mail'];
        $compania = $_POST['company'];
        $mensaje = $_POST['msg'];
        print_r ('datos del formulario listo');
        log("datos del formulario listo");

        $header = 'From: ' . $correo . "\r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/plain";
        print_r ('header listo');
        log("header listo");

        $contenido = "Este mensaje fue enviado por: " . $nombre . "\r\n";
        $contenido .= "Su e-mail es: " . $correo . "\r\n";
        $contenido .= "Compañía: " . $compania . "\r\n";
        $contenido .= "Mensaje: " . $mensaje . "\r\n";
        print_r ('contenido listi');
        log("contenido listo");
        
        mail($destino, $asunto, utf8_decode($contenido), $header);
        print_r ('mail listo');
        log("mail listo");
        
        header("Location:contacto.html");
        print_r ('header2 listo');
        log("hader2 listo");
    //     if(mail($destino,$asunto,utf_decode($contenido))){
    //         echo ("SU MENSAJE A SIDO ENVIADO");
    //         } else {
    //         echo ("ERROR. PORFAVOR INTENTE MAS TARDE");
    //     }
    // }else {
    //     echo ("ERROR. PORFAVOR INTENTE MAS TARDE");
    // }    
?>