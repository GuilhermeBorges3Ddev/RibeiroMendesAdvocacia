<?php
if(isset($_POST['enviar'])){
    $assunto = "solicitação de orçamento";

    // pegando os dados do form...
    $msg = "Nome: " . $_POST["nome"] . "<br>";
    $msg .= "Email: " . $_POST["email"] . "<br>";
    $msg .= "Telefone: " . $_POST["telefone"] . "<p>";
    $msg .= "Mensagem:<br>" . $_POST["mensagem"];

    $destinatario = "ribeiromendesadvofficial@gmail.com";

    // headers que prepara a mensagem
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: " . $_POST["nome"] . "<" . $_POST["email"] . ">\r\n";
    $headers .= "Reply-To: " . $_POST["email"] . "\r\n";

    // envia o email...
    mail($destinatario,$assunto,$msg,$headers);
}
?>