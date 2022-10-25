var urlBase = 'http://coches/api';
//var urlBase = 'http://larabikes.wsl/api';

function getId() {
    var url = location.href;
    var regexp = /\?id=\d{1,}/;
    var resultados = regexp.exec(url);

    if (resultados.length > 0)
        return resultados[0].split("=")[1];
    else
        return undefined;
}