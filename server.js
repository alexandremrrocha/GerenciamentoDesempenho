const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcRamUsage.js');
let url


http.createServer((req, res) => {
    url = req.url;
    res.end('<h2>Servidor esta rodando!</h2> <h2>Cheque o terminal!</h2>')


}).listen(port, () => console.log(`Server is running in ${host}:${port}`));