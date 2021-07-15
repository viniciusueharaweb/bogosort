const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const bogosortController = require("./controllers/bogosortController");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("public/index.html", { root: path.dirname(__dirname) });
});

app.get("/data", async (req, res) => {
    let number = req.query["number"];
    if (number) {
        const metrics = await bogosortController.applyBogosortAlgorithm(number);
        res.send(metrics);
    } else {
        res.status(400).send("'number' query parameter missing");
    }
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));
