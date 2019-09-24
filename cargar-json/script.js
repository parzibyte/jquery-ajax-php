$(document).ready(
    function() {
        const $btnCargarDatos = $("#btnCargarDatos"),
            $respuesta = $("#respuesta");
        $btnCargarDatos.click(function() {
            $.get("./datos.php", function(nombresCodificados) {
                let nombres = JSON.parse(nombresCodificados);
                // Limpiar el contenedor por si ya tenía datos
                $respuesta.empty();
                // Cada nombre agregarlo usando forEach del arreglo
                // https://parzibyte.me/blog/2019/09/24/foreach-javascript-recorrer-arreglos/
                nombres.forEach(nombre => {
                    $respuesta.append(nombre + "<br>");
                });
            });
        });
    }
);