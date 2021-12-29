const express = require('express');
const app = express();

const wines = require("./routes/wines")

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello the one and only Gabriel Reiter")})

app.use('/wines', wines)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is HOT"));