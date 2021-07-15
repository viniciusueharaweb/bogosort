const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const bogosortController = require("./controllers/bogosortController");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("public/index.html", { root: path.dirname(__dirname) });
});

app.get("/api", async (req, res) => {
    const length = Number(req.query["length"]);

    if (length) {
        const metrics = await bogosortController.applyBogosortAlgorithm(length);
        res.send(metrics);
    } else if (!req.query["length"]) {
        res.status(400).send(
            "<h1>Para realizar uma chamada sucedida à API, insira o parâmetro URL 'length'</h1>"
        );
    } else {
        res.status(400).send(
            "<h1>Passe um número para o parâmetro URL 'length'</h1>"
        );
    }
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));
