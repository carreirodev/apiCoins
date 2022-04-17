const express = require("express");
const cors = require("cors");
const fs = require("fs");

const listMoedas = require("./moedas.json");
const { set } = require("express/lib/application");

const app = express(); // inicia o servidor
app.use(cors());

// definicao de endereço e url
const hostname = "127.0.0.1";
const port = 4000;

app.get("/", (req, res) => {
	const pageHTML = fs.readFileSync("pagina.html");
	res.setHeader("Content-Type", "text/html"); //necessario para renderizar HTML
	res.send(pageHTML);
});

app.get("/moedas", (req, res) => {
	res.json(listMoedas); //o mesmo que res.send(JSON.stringify(listMoedas));
});

app.listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
