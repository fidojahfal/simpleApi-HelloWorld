const express = require("express");
const bodyParser = require("body-parser");
const simpleApi = require("./Routes/SimpleApiRoutes")

const app = express();

app.use(bodyParser.json());

app.use("/api/v1", simpleApi);

app.listen("5000", () => {
  console.log("Listen on port 5000");
});
