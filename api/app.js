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
    let length = req.query["length"];
    if (length) {
        const metrics = await bogosortController.applyBogosortAlgorithm(length);
        res.send(metrics);
    } else {
        res.status(400).send("'length' query parameter missing");
    }
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));
