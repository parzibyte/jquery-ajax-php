$(document).ready(function() {
    const $nombre = $("#nombre"),
        $correo = $("#correo"),
        $edad = $("#edad"),
        $btnEnviar = $("#btnEnviar"),
        $respuesta = $("#respuesta");

    $btnEnviar.click(function() {
        // Poner estado de "cargando"
        $respuesta.html("Cargando...");
        $.post("./procesar.php", {
            nombre: $nombre.val(),
            correo: $correo.val(),
            edad: $edad.val(),
        }, function(respuestaComoJson) {
            // La decodificamos
            let respuesta = JSON.parse(respuestaComoJson);
            $respuesta.html(respuesta);
        })
    });

});