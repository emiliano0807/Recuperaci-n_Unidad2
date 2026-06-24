const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  if (req.url === '/api/v1/saludo') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      mensaje: "Hola Mundo, ¡saludos desde la API!",
      servidor: os.hostname()
    }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
