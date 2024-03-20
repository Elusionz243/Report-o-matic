const knex = require("../../db/db");

const getAllReports = async () => await knex("reports").select();

const createReport = async (report) => await knex("reports").insert(report);

module.exports = {
  getAllReports,
  createReport,
};
