const http = require("http");
const url = require("url");
const fs = require("fs");

const listaDeMoedas = require("./moedas.json");

// definicao de endereço e url
const hostname = "127.0.0.1";
const port = 3000;

const app = http.createServer((req, res) => {
	const urlparse = url.parse(req.url, true);

	const moedas = JSON.stringify(listaDeMoedas);
	switch (urlparse.pathname) {
		case "/home":
			res.setHeader("Content-Type", "text/html");
			res.write(moedas);
			break;
		default:
			const page = fs.readFileSync("pagina.html");
			res.write(page);
			break;
	}
	return res.end();
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
