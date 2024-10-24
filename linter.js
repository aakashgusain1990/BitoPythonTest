// Linter Issue Example
var myVar = 'Hello';  // Unused variable

function AddTask(taskname) {  // Function name should be camelCase
    if(taskname == ""){  // Use strict equality (===) instead of loose equality (==)
        console.log("Task name cannot be empty")
        return
    }
    var taskList = []
    taskList.push(taskname)
    taskList.forEach(task => {
       console.log(task) // Improper indentation
    })
}

function deleteTask(id){
  tasklist.splice(id, 1) // tasklist variable is undeclared (should be taskList)
}

let sampleTask = {
    id: 1
    name: "Sample Task" // Missing comma after object key-value pair
};

for(let i = 0; i < 10; i++){   // Incorrect spacing around operators
console.log(i) // Improper indentation
}

const taskDone = true
if(taskDone){console.log("Task completed")} // No spaces inside if statement, missing semicolon

let test = 3;
switch (test){
  case 1: console.log('One') break // Missing semicolons and proper case formatting
  case 2: console.log('Two') break
  case 3: console.log('Three') break
  default: console.log('Unknown') break // Extra "break" in default case
}

let items = [1, 2, 3, 4, 5]
items.map( function (item) { item * 2 } )  // No return statement in map function

