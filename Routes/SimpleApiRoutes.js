const express = require("express");
const { helloWorld } = require("../Controllers/simpleApiControllers");

const router = express.Router();

router.get("/", helloWorld);

module.exports = router;
