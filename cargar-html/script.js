$(document).ready(
    function() {
        const $btnCargarDatos = $("#btnCargarDatos"),
            $respuesta = $("#respuesta");
        $btnCargarDatos.click(function() {
            $.get("./datos.php", function(datos) {
                $respuesta.html(datos);
            });
        });
    }
);