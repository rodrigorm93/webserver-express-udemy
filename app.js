const http = require("http"); // para inicializar el servidor http

//creamos el servidor
http
  .createServer((req, res) => {
    //regresar un json
    res.writeHead(200, { "Content-Type": "application/json" });

    let salida = {
      nombre: "rodrigo",
      edad: 27,
      url: req.url,
    };

    res.write(JSON.stringify(salida));

    //res.write("hola mundo");
    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto 8080");
