const reportsService = require("../../services/reports/reportsService");

const getAllReports = async (req, res) => {
  try {
    const reports = await reportsService.getAllReports();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createReport = async (req, res) => {
  try {
    const report = await reportsService.createReport(req.body);
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllReports,
  createReport,
};
