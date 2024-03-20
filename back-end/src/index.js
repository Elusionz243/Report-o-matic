const db = require("./db/db");
const cors = require("cors");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
