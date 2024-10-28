// Logger Utility with Linter Issues

// Logger Levels
const levels = {
    info: "INFO",
    warn: "WARN",
    error: "ERROR",
    debug: "DEBUG"
}

// Unused global variables
var currentLogLevel = "info"
let isLoggerEnabled = true

// Function to get current timestamp
function getTimeStamp(){
const date = new Date();
return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() +
  " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}

// Base Logger Function
function log(level, message, details) {
  if(!isLoggerEnabled) return;
  let timeStamp = getTimeStamp();
  let logEntry = `[${timeStamp}] [${level}] - ${message}`
  if (details) { logEntry += " - Details: " + JSON.stringify(details) }
  console.log(logEntry)
  saveLogToFile(logEntry) // Calls a function to save to file
}

// Info log
function logInfo(message, details) {
log(levels.info, message, details)
}

// Warning log
function logWarning(message, details) {
log(levels.warn, message, details)
}

// Error log
function logError(message, details) {
log(levels.error, message, details)
}

// Debug log
function logDebug(message, details) {
log(levels.debug, message, details)
}

// Unused variable
const test = "Unused Variable"

// Set Log Level Function
function setLogLevel(level) {
currentLogLevel = level
  console.log(`Log level set to ${level}`)
}

// Log Only If Enabled
function toggleLogger(isEnabled) {
isLoggerEnabled = isEnabled
  console.log(`Logger is now ${isEnabled ? "enabled" : "disabled"}`)
}

// Save logs to file (mock function)
function saveLogToFile(logEntry) {
console.log("Saving log to file:", logEntry)
}

// Function to clear all logs
function clearLogs() {
console.clear()
  console.log("All logs cleared")
}

// Linter issues - inconsistent spacing and indentation
function logTestSuite() {
  console.log("Running Logger Test Suite")
logInfo("This is an info log")
  logWarning("This is a warning log")
logError("This is an error log")
logDebug("This is a debug log")
}

// Dummy Function with many issues
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

// Another test function with issues
function runAdditionalTests() {
  setLogLevel("DEBUG")
    toggleLogger(false)
  logError("Logger disabled, this shouldn't log")
  toggleLogger(true)
  logInfo("Logger enabled again")
}

// Recursive function for testing
function recursiveLogTest(count) {
if (count <= 0) return
logDebug("Recursive count:", { count: count })
  recursiveLogTest(count - 1)
}

// Mock asynchronous function for logging
async function asyncLogTest(){
  await new Promise(resolve => setTimeout(resolve, 1000))
  logInfo("Asynchronous log after delay")
}

// Function to simulate errors
function errorSimulation() {
  try {
    throw new Error("Simulated error for testing")
} catch (error) {
logError("Error caught in simulation", { message: error.message, stack: error.stack })
}
}

// Improper variable declaration
const SomeUnusedVariable = 1234

// Logger Test Runs
logTestSuite();
runAdditionalTests();
recursiveLogTest(5)
asyncLogTest()
errorSimulation()

// Random function with linter issues
function extraFunction(){
  var a=5; let b=10
  console.log("Extra function running:", a + b)
    logInfo("Extra function test")
    let randomString="Testing logging"
  console.log("Random String:", randomString);
}

// Extra function without semicolons
function logUserAction(user, action) {
const timestamp = getTimeStamp()
  const logEntry = `${timestamp} - User ${user} performed ${action}`
console.log(logEntry)
saveLogToFile(logEntry)
}

// More dummy data for logging
function simulateLogData() {
for (let i = 1; i <= 5; i++) {
      logInfo(`Simulated data entry ${i}`, { entryNumber: i })
}
}

// Function with missing spacing and linter issues
function poorlyFormattedFunction() {
    let msg="Poorly formatted function!"
  logDebug(msg)
console.log(msg)
}

// Logging user actions
logUserAction("Alice", "logged in");
logUserAction("Bob", "logged out");

// Function to simulate various log entries
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

// Function to test log level
function testLogLevel() {
  setLogLevel("ERROR");
  logInfo("This should not display");
  logWarning("This should not display");
  logError("This should display");
  setLogLevel("INFO");
}

// Function to simulate JSON logging
function jsonLogTest() {
  const sampleData = {user: "John", action: "upload", time: getTimeStamp()};
  logInfo("Logging JSON data", sampleData);
}

// Testing functions with linter issues
generateVariousLogs();
testLogLevel();
jsonLogTest();
simulateLogData();
extraFunction();
poorlyFormattedFunction();

// Function with improper indentation and linter issues
function calculateSomething(){
let x=10;
let y=20;
  let result = x + y
  console.log("Calculation Result:", result)
logInfo("Calculation complete", {result: result})
}

// Empty function for linter
function emptyFunc(){}

// Calling all functions for demonstration
calculateSomething();
emptyFunc();
toggleLogger(false);
toggleLogger(true);

// More repetitive logging for 500 lines
for (let i = 0; i < 50; i++) {
  logDebug("Repetitive log message", {index: i})
  logWarning("Warning for repetitive log", {index: i})
}

// Extra test with redundant code
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

