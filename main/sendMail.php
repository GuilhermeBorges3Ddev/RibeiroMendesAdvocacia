<?php
// Destinatário
$para = 'ribeiromendesadvofficial@gmail.com';

// Assunto do e-mail
$assunto = "Contato do através do site ...";

// Campos do formulário de contato
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['tel'];
$mensagem = $_POST['conteudo'];

// Monta o corpo da mensagem com os campos
$corpo = "<html><body>";
$corpo .= "Nome: $nome <br \> Email: $email <br \> Telefone: $telefone <br \>  Mensagem: $mensagem";
$corpo .= "</body></html>";

// Cabeçalho do e-mail
$email_headers = "MIME-Version: 1.0" . "\r\n";
$email_headers .= "Content-Type:text/html;charset=UTF-8" . "\r\n";
$email_headers .= 'From: ' .$nome.'<'.$email.'>'."\r\n";

//Verifica se os campos estão preenchidos para enviar então o email
if (mail($para, $assunto, $corpo, $email_headers)) {
    $msg = "Sua mensagem foi enviada com sucesso. Clique em OK!";
    echo "<script>alert('$msg');window.location.assign('https://ribeiromendesadv.com.br/');</script>";
} else {
    $msg = "Erro ao enviar a mensagem, preencha todos os campos. Clique em OK!";
    echo "<script>alert('$msg');window.location.assign('https://ribeiromendesadv.com.br/');</script>";
}
?>

