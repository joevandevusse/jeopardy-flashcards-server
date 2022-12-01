const express = require("express");
const port = 9000;

const app = express();

const db = require("./db");
// Need the cors stuff to run frontend/backend locally + simultaneously
var cors = require("cors");

app.use(express.json());
app.use(cors());

const cluesRouter = require("./routes/clue");

app.use("/clues", cluesRouter);

app.listen(port, () => 
    console.log(`Server running at http://localhost:${port}`)
)