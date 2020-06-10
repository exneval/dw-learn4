require("dotenv").config();

const express = require("express");
const router = require("./routes");
const app = express();
const port = 5000;

app.use(express.json());

app.use("/api/v1", router);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
