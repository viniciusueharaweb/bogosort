var express = require("express");
var cors = require("cors");
var app = express();
const PORT = 3000;
const bogosortController = require("./controller/bogosortController");

app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/data", async (req, res) => {
    let number = req.query["number"];
    if (number) {
        const oi = await bogosortController.applyBogosortAlgorithm(number);
        res.send({ number: oi });
    } else {
        res.status(400).send("'number' query parameter missing");
    }
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));
