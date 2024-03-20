const express = require("express");
const router = express.Router();
const reportsController = require("../../controllers/reportsController");

router
  .get("/", reportsController.getReports)
  .post("/", reportsController.createReport);

module.exports = router;
