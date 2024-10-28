// Ticket Management System with Linter Issues

var Users = [];  // Unused variables, inconsistent naming convention
var tickets = [];
var TicketCategories = ["Bug", "Feature", "Support"];  // Should use let/const
var unresolvedTickets = [];   // Should declare const

// Function to create a new user
function CreateUser(userName, Email) {
  const user = { id: Users.length + 1, name: userName, email: Email };
  Users.push(user)
  console.log("User created:", userName);
  return user;
}

// Inconsistent spacing
function createTicket(title, description, category, priority, userId) {
const ticket = {
    id: tickets.length + 1,
    title: title,
    description: description,
    category: category,
    priority: priority,
    status: "Open",
    assignedTo: userId
};
tickets.push(ticket);
console.log(`Ticket created with ID: ${ticket.id}`);
return ticket;
}

// Function to display all tickets
function displayTickets() {
  console.log("Displaying all tickets...");
tickets.forEach(ticket => {
    console.log("Ticket ID:", ticket.id, "Title:", ticket.title, "Status:", ticket.status);
})
}

// Function to find tickets by user
function findTicketsByUser(userId) {
const userTickets = tickets.filter(ticket => ticket.assignedTo === userId);
if(userTickets.length > 0) {
    console.log(`Tickets for User ID ${userId}:`)
userTickets.forEach(ticket => {
        console.log("Ticket ID:", ticket.id, "Title:", ticket.title, "Status:", ticket.status)
    });
} else { console.log("No tickets found for this user."); }
}

// Unused variables and improper format
var unusedVar = "Test";

function updateTicketStatus(ticketId, newStatus) {
const ticket = tickets.find(t => t.id === ticketId);
if (ticket) {
    ticket.status = newStatus;
    console.log(`Ticket ID ${ticketId} updated to ${newStatus}`);
} else { console.log("Ticket not found."); }
}

// Function to assign a ticket to a user
function AssignTicket(ticketId, userId) {
    let ticket = tickets.find(t => t.id === ticketId)
    if (ticket) {
        ticket.assignedTo = userId
        console.log(`Ticket ID ${ticketId} assigned to User ID ${userId}`)
    } else {
        console.log("Ticket not found.")
    }
}

// Function to display open tickets
function DisplayOpenTickets() {
    let openTickets = tickets.filter(t => t.status === "Open");
    console.log("Open Tickets:")
openTickets.forEach(ticket => {
        console.log("Ticket ID:", ticket.id, "Title:", ticket.title, "Priority:", ticket.priority)
    })
}

// Unused functions for testing
function unusedFunctionTest() {
    return "Not used anywhere";
}

// Function to close a ticket
function CloseTicket(ticketId) {
    const ticket = tickets.find(t => t.id === ticketId);
    if(ticket) {
        ticket.status = "Closed"
        console.log(`Ticket ID ${ticketId} is now closed`)
    } else { console.log("Ticket not found."); }
}

// Inconsistent function name casing and unused parameters
function ResolveTicket(ticketId) {
    let ticket = tickets.find(t => t.id === ticketId);
if(ticket) {
        ticket.status = "Resolved"
        console.log(`Ticket ID ${ticketId} marked as resolved`)
    } else { console.log("Ticket not found."); }
}

// Inconsistent and unused code for testing
function unusedLoop() {
for (let i = 0; i < 5; i++) { console.log("Unused loop iteration:", i) }
}

// Function to view all unresolved tickets
function viewUnresolvedTickets() {
    unresolvedTickets = tickets.filter(t => t.status !== "Resolved" && t.status !== "Closed"); // Modifies global variable
    console.log("Unresolved Tickets:")
unresolvedTickets.forEach(ticket => {
        console.log("Ticket ID:", ticket.id, "Title:", ticket.title, "Status:", ticket.status)
    })
}

// Function to filter tickets by priority
function FilterTicketsByPriority(priorityLevel) {
    let filteredTickets = tickets.filter(ticket => ticket.priority === priorityLevel)
console.log(`Tickets with priority ${priorityLevel}:`)
filteredTickets.forEach(ticket => {
        console.log("Ticket ID:", ticket.id, "Title:", ticket.title, "Status:", ticket.status)
    })
}

// Testing functions with linter issues
CreateUser("Alice", "alice@example.com");
CreateUser("Bob", "bob@example.com");
createTicket("Bug in login", "Login fails on correct credentials", "Bug", "High", 1);
createTicket("New feature", "Add dark mode option", "Feature", "Low", 2);
createTicket("Support request", "Unable to reset password", "Support", "Medium", 1);
displayTickets();
findTicketsByUser(1);
updateTicketStatus(1, "In Progress");
AssignTicket(2, 1);
DisplayOpenTickets();
viewUnresolvedTickets();
FilterTicketsByPriority("High");
CloseTicket(1);
ResolveTicket(2);

// Additional random console logs for testing
console.log("End of function calls.")
console.log("Testing console outputs")

// Function with improper formatting and linter issues
function listAllUsers() {
Users.forEach(user => {
    console.log("User ID:", user.id, "Name:", user.name, "Email:", user.email)
})
}

// Another unused function
function unusedTestFunc() {
    console.log("This is another unused function.")
}

// Random calculations without use
var calc1 = 5 + 2;
var calc2 = 3 * 6;

// Incorrectly formatted long function with linter issues
function reallyLongFunction() {
  let total = 0
    for (let i = 0; i < tickets.length; i++) {
      total += 1
      console.log("Counting tickets:", i)
  }
}

// Complex but poorly formatted function with multiple issues
function calculateTicketStats() {
let openTickets = tickets.filter(t => t.status === "Open").length;
    let resolvedTickets = tickets.filter(t => t.status === "Resolved").length
    let closedTickets = tickets.filter(t => t.status === "Closed").length;
console.log("Open tickets:", openTickets)
console.log("Resolved tickets:", resolvedTickets)
    console.log("Closed tickets:", closedTickets)
}

// Incorrect use of ternary operator
let hasHighPriorityTickets = tickets.some(ticket => ticket.priority === "High") ? true : false;

// Function to calculate ticket resolution rate
function CalculateResolutionRate() {
const resolvedCount = tickets.filter(ticket => ticket.status === "Resolved").length
    const totalCount = tickets.length
    let rate = (resolvedCount / totalCount) * 100
console.log("Resolution Rate:", rate + "%")
}

// Unused variables for error-prone linter testing
var unusedString = "Unused variable test.";
let anotherUnusedVariable = 42;

// Linter warnings: arrow functions without return braces
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Inconsistent function name casing
function DisplayUnresolvedTickets() {
    unresolvedTickets.forEach(ticket => {
        console.log("Unresolved Ticket ID:", ticket.id, "Title:", ticket.title)
    })
}

// Inconsistent spacing and missing semicolons
function printTicketDetails(ticketId) {
const ticket = tickets.find(t => t.id === ticketId);
if(ticket) {
    console.log("Ticket ID:", ticket.id, "Title:", ticket.title, "Status:", ticket.status)
    } else { console.log("Ticket not found.") }
}

// Calling all functions for testing
displayTickets()
listAllUsers()
DisplayOpenTickets()
CalculateResolutionRate()
printTicketDetails(3)

// Large loop with spacing issues
for(let i = 0;i < 10;i++){console.log("Iteration:", i)}

// Redundant code for linter issues
var TestString = "Linter example.";
var TestNumber = 1234;

function placeholderFunction() {
    let count = 0;
    for(let i=0; i<20; i++) { count += i }
    console.log("Placeholder count:", count)
}

const emptyObject = {};

// Calling unused functions for testing
unusedFunctionTest();
placeholderFunction();
unusedTestFunc();

