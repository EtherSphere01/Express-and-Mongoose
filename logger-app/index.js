const path = require("path");
const fs = require("fs");
const inputArguments = process.argv.slice(2);
let text = inputArguments.join(" ");

if (!text) {
  console.error("❌ Please provide some text to log.");
  console.error("Usage: node index.js <text>");
  process.exit(1);
}

const timestamp = new Date().toISOString();
text = `${text} - [ ${timestamp.split('T')[0]} ] `;

const logFilePath = path.join(__dirname, "log.txt");

fs.appendFile(logFilePath, `${text}\n`, (err) => {
  if (err) {
    console.error("❌ Failed to write to log file:", err);
    process.exit(1);
  }
  console.log("✅ Text logged successfully.");
});
