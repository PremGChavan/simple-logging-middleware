const { timeStamp } = require('console');
const express = require('express');
const fs = require('fs').promises; 
const path = require("path");

const app  = express();
app.use(express.json());

const filePath = path.join(__dirname, 'requests.json');

// log request details to a file
const writeLogToFile = async (log) => {
  try {
    let logs = []
    try {
      const existing = await fs.readFile(filePath, 'utf8');
      logs = JSON.parse(existing);
    } catch (err) {
      console.log(" requests.json not found , will create a new one.");     
    }
    logs.push(log)
    await fs.writeFile(filePath, JSON.stringify(logs, null, 2));
  } catch (err) {
    console.log("Error writing to log file:", err.message);
  }
};

// Middleware to log request details
app.use(async (req, res, next) => {
  const startTime = Date.now();

  res.on('finish', async () => {
    const duration = Date.now() - startTime;

    const logEntry = {
      success: true,
      name: "Prem Chavan",
      message: req.body.message || "Request processed",
      method: req.method,
      url: req.originalUrl,
      ip: req.ip,
      status: res.statusCode,
      timeStamp: new Date().toISOString(),
      duration: `${duration}ms`
    };
    await writeLogToFile(logEntry);
    console.log(logEntry);
  });
  next();
});


// routes to handle requests

// GET route
app.get("/api/data", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello from the GET API!",
    name: "Prem Chavan",
    timeStamp: new Date().toISOString(),
  })
});

// POST route
app.post("/api/data", (req, res) => {
  res.status(200).json({
    body: req.body,
    success: true,
    message: req.body.message,
    name: req.body.name,
    timeStamp: new Date().toISOString(),
  })
});


// PORT to listen on
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});