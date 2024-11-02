const express = require("express");
const Log = require("../models/log");

const router = express.Router();

// Get all logs
router.get("/", async (req, res) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching logs" });
  }
});

// Create a new log
router.post("/", async (req, res) => {
  const { date, content } = req.body;
  try {
    const newLog = new Log({ date, content });
    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    res.status(500).json({ message: "Error saving log" });
  }
});

// Delete a log by ID
router.delete("/:id", async (req, res) => {
  try {
    await Log.findByIdAndDelete(req.params.id);
    res.json({ message: "Log deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting log" });
  }
});

module.exports = router;
