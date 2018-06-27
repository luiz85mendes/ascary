var http = require('http');

var operadoras = [
    { nome: "Vivo", codigo: 14, categoria: "Celular" },
    { nome: "Tim", codigo: 41, categoria: "Celular" },
    { nome: "Vivo", codigo: 15, categoria: "Celular" },
    { nome: "GVT", codigo: 25, categoria: "Fixo" },
    { nome: "Embratel", codigo: 21, categoria: "Fixo" }
];

var contatos = [
    { nome: "Pedro", telefone: "9998888"},
    { nome: "Ana", telefone: "9998877" },
    { nome: "Maria", telefone: "9998866" }
];


http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write(JSON.stringify(contatos));
    res.write(JSON.stringify(operadoras));
    res.end();
}).listen(8082);