const express = require("express");

const app = express();

//Middleware
app.use(express.json());

const port = 8080;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
