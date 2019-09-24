<?php
// Aquí podemos procesar los datos. Vienen dentro de $_POST
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$edad = $_POST["edad"];
file_put_contents("datos.txt", "Nombre: $nombre, Correo: $correo, Edad: $edad\n", FILE_APPEND);
echo json_encode("Formulario enviado");