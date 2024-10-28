var Users = [];
var tickets = [];
const TicketCategories = ["Bug", "Feature", "Support"];
const unresolvedTickets = [];

function CreateUser(userName, Email) {
  const user = { id: Users.length + 1, name: userName, email: Email };
  Users.push(user);
  console.log("User created:", userName);
  return user;
}

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

function displayTickets() {
  console.log("Displaying all tickets...");
  tickets.forEach(ticket => {
    console.log("Ticket ID:", ticket.id, "Title:", ticket.title, "Status:", ticket.status);
  });
}

function findTicketsByUser(userId) {
  const userTickets = tickets.filter(ticket => ticket.assignedTo === userId);
  if (userTickets.length > 0) {
    console.log(`Tickets for User ID ${userId}:`);
    userTickets.forEach(ticket => {
      console.log("Ticket ID:", ticket.id, "Title:", ticket.title, "Status:", ticket.status);
    });
  } else {
    console.log("No tickets found for this user.");
  }
}

function updateTicketStatus(ticketId, newStatus) {
  const ticket = tickets.find(t => t.id === ticketId);
  if (ticket) {
    ticket.status = newStatus;
    console.log(`Ticket ID ${ticketId} updated to ${newStatus}`);
  } else {
    console.log("Ticket not found.");
  }
}

function AssignTicket(ticketId, userId) {
  const ticket = tickets.find(t => t.id === ticketId);
  if (ticket) {
    ticket.assignedTo = userId;
    console.log(`Ticket ID ${ticketId} assigned to User ID ${userId}`);
  } else {
    console.log("Ticket not found.");
  }
}

function DisplayOpenTickets() {
  const openTickets = tickets.filter(t => t.status === "Open");
  console.log("Open Tickets:");
  openTickets.forEach(ticket => {
    console.log("Ticket ID:", ticket.id, "Title:", ticket.title, "Priority:", ticket.priority);
  });
}

function CloseTicket(ticketId) {
  const ticket = tickets.find(t => t.id === ticketId);
  if (ticket) {
    ticket.status = "Closed";
    console.log(`Ticket ID ${ticketId} is now closed`);
  } else {
    console.log("Ticket not found.");
  }
}

function ResolveTicket(ticketId) {
  const ticket = tickets.find(t => t.id === ticketId);
  if (ticket) {
    ticket.status = "Resolved";
    console.log(`Ticket ID ${ticketId} marked as resolved`);
  } else {
    console.log("Ticket not found.");
  }
}

function viewUnresolvedTickets() {
  const unresolvedTickets = tickets.filter(t => t.status !== "Resolved" && t.status !== "Closed");
  console.log("Unresolved Tickets:");
  unresolvedTickets.forEach(ticket => {
    console.log("Ticket ID:", ticket.id, "Title:", ticket.title, "Status:", ticket.status);
  });
}

function FilterTicketsByPriority(priorityLevel) {
  const filteredTickets = tickets.filter(ticket => ticket.priority === priorityLevel);
  console.log(`Tickets with priority ${priorityLevel}:`);
  filteredTickets.forEach(ticket => {
    console.log("Ticket ID:", ticket.id, "Title:", ticket.title, "Status:", ticket.status);
  });
}

function listAllUsers() {
  Users.forEach(user => {
    console.log("User ID:", user.id, "Name:", user.name, "Email:", user.email);
  });
}

function printTicketDetails(ticketId) {
  const ticket = tickets.find(t => t.id === ticketId);
  if (ticket) {
    console.log("Ticket ID:", ticket.id, "Title:", ticket.title, "Status:", ticket.status);
  } else {
    console.log("Ticket not found.");
  }
}

function CalculateResolutionRate() {
  const resolvedCount = tickets.filter(ticket => ticket.status === "Resolved").length;
  const totalCount = tickets.length;
  const rate = (resolvedCount / totalCount) * 100;
  console.log("Resolution Rate:", rate + "%");
}

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
displayTickets();
listAllUsers();
DisplayOpenTickets();
CalculateResolutionRate();
printTicketDetails(3);

for (let i = 0; i < 10; i++) {
  console.log("Iteration:", i);
}
