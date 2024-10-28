const levels = {
  info: "INFO",
  warn: "WARN",
  error: "ERROR",
  debug: "DEBUG"
}

var currentLogLevel = "info"
let isLoggerEnabled = true

function getTimeStamp(){
  const date = new Date();
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() +
      " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}

function log(level, message, details) {
  if(!isLoggerEnabled) return;
  let timeStamp = getTimeStamp();
  let logEntry = `[${timeStamp}] [${level}] - ${message}`
  if (details) { logEntry += " - Details: " + JSON.stringify(details) }
  console.log(logEntry)
  saveLogToFile(logEntry)
}

function logInfo(message, details) {
  log(levels.info, message, details)
}

function logWarning(message, details) {
  log(levels.warn, message, details)
}

function logError(message, details) {
  log(levels.error, message, details)
}

function logDebug(message, details) {
  log(levels.debug, message, details)
}

function setLogLevel(level) {
  currentLogLevel = level
  console.log(`Log level set to ${level}`)
}

function toggleLogger(isEnabled) {
  isLoggerEnabled = isEnabled
  console.log(`Logger is now ${isEnabled ? "enabled" : "disabled"}`)
}

function saveLogToFile(logEntry) {
  console.log("Saving log to file:", logEntry)
}

function clearLogs() {
  console.clear()
  console.log("All logs cleared")
}

function logTestSuite() {
  console.log("Running Logger Test Suite")
  logInfo("This is an info log")
  logWarning("This is a warning log")
  logError("This is an error log")
  logDebug("This is a debug log")
}

function dummyLoggerFunction() {
  for (let i = 0; i < 5; i++) {
      console.log("Looping through iteration:", i)
  }
  if (isLoggerEnabled) {
      logInfo("Dummy Function is enabled")
  } else {
      logWarning("Dummy Function is disabled")
  }
}

function runAdditionalTests() {
  setLogLevel("DEBUG")
  toggleLogger(false)
  logError("Logger disabled, this shouldn't log")
  toggleLogger(true)
  logInfo("Logger enabled again")
}

function recursiveLogTest(count) {
  if (count <= 0) return
  logDebug("Recursive count:", { count: count })
  recursiveLogTest(count - 1)
}

async function asyncLogTest(){
  await new Promise(resolve => setTimeout(resolve, 1000))
  logInfo("Asynchronous log after delay")
}

function errorSimulation() {
  try {
      throw new Error("Simulated error for testing")
  } catch (error) {
      logError("Error caught in simulation", { message: error.message, stack: error.stack })
  }
}

logTestSuite();
runAdditionalTests();
recursiveLogTest(5)
asyncLogTest()
errorSimulation()

function extraFunction(){
  var a=5; let b=10
  console.log("Extra function running:", a + b)
  logInfo("Extra function test")
  let randomString="Testing logging"
  console.log("Random String:", randomString);
}

function logUserAction(user, action) {
  const timestamp = getTimeStamp()
  const logEntry = `${timestamp} - User ${user} performed ${action}`
  console.log(logEntry)
  saveLogToFile(logEntry)
}

function simulateLogData() {
  for (let i = 1; i <= 5; i++) {
      logInfo(`Simulated data entry ${i}`, { entryNumber: i })
  }
}

function poorlyFormattedFunction() {
  let msg="Poorly formatted function!"
  logDebug(msg)
  console.log(msg)
}

logUserAction("Alice", "logged in");
logUserAction("Bob", "logged out");

function generateVariousLogs(){
  for (let i = 0; i < 10; i++){
      logInfo("Generating log entry", {index: i});
      if (i % 2 === 0){
          logWarning("Even number encountered", {index: i})
      } else {
          logDebug("Odd number encountered", {index: i})
      }
  }
}

function testLogLevel() {
  setLogLevel("ERROR");
  logInfo("This should not display");
  logWarning("This should not display");
  logError("This should display");
  setLogLevel("INFO");
}

function jsonLogTest() {
  const sampleData = {user: "John", action: "upload", time: getTimeStamp()};
  logInfo("Logging JSON data", sampleData);
}

generateVariousLogs();
testLogLevel();
jsonLogTest();
simulateLogData();
extraFunction();
poorlyFormattedFunction();

function calculateSomething(){
  let x=10;
  let y=20;
  let result = x + y
  console.log("Calculation Result:", result)
  logInfo("Calculation complete", {result: result})
}

function emptyFunc(){}

calculateSomething();
emptyFunc();
toggleLogger(false);
toggleLogger(true);

for (let i = 0; i < 50; i++) {
  logDebug("Repetitive log message", {index: i})
  logWarning("Warning for repetitive log", {index: i})
}

function redundantTest(){
  logInfo("This is a redundant test")
  logInfo("Another redundant log")
  let x = 1; let y = 2; let z = x + y
  console.log("Redundant calculation:", z)
}

redundantTest();
generateVariousLogs();
logTestSuite();
errorSimulation();
asyncLogTest();
