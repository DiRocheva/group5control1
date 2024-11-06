
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    $data = "Name: ".$name."\nEmail: ".$email."\nPassword: ".$password."\n\n";
    
    file_put_contents("registration_data.txt", $data, FILE_APPEND | LOCK_EX);
    
    echo "Данные успешно сохранены.";
} else {
    echo "Ошибка: данные не были переданы.";
}
?>
<a href="registration_data.txt" download>Скачать файл с данными</a>