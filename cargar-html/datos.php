<?php
$nombre = "Luis";
$sitio = "parzibyte.me";
$html = "<h1>Nombre: $nombre</h1>";
# Concatenarle más cosas
$html .= "<p>Web: $sitio</p>";
# Finalmente lo imprimimos como HTML
echo $html;
