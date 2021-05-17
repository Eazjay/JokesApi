const express = require("express");
const cors = require("cors");
const app = new express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));





require("./server/routes/jokes.routes")(app);
require("./server/config/jokes.config");
app.listen(port, ()=> console.log(`Listening on port ${port}`));