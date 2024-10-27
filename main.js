// Factorial calculator using Web Workers with linter issues for practice

var numbersToCalculate = [5, 7, 10, 15] // using var instead of let/const
var calculatedResults = []  // var instead of let/const

function createWorker() {
    let worker = new Worker('worker.js')
    worker.onmessage = (event) => {
        let result = event.data.result
        let number = event.data.number
        calculatedResults.push({ number: number, factorial: result })
        updateResultsDisplay()
    }
    worker.onerror = function(error) { console.error('Worker Error:', error) }  // Anonymous function style inconsistency
    return worker
}

function startCalculations() {
    for (var i = 0; i < numbersToCalculate.length; i++) {
        let worker = createWorker() 
        if (i % 2 == 0) console.log("Processing even index")  // Missing braces
        worker.postMessage(numbersToCalculate[i])
        var tempVar = 'temp'  // Unused variable for linter error
    }
}

function updateResultsDisplay() {
    var resultDiv = document.getElementById('results')
    resultDiv.innerHTML = '' 
    for (let res of calculatedResults) {  // Mixing let and var in the same scope
    var p = document.createElement('p')  // Inconsistent indentation
      p.innerText = `Factorial of ${res.number} is ${res.factorial}`
      resultDiv.appendChild(p)
    }
}

function resetCalculations() {
    calculatedResults = []
    document.getElementById('results').innerHTML = 'Results will appear here...';
    var resetDone = true // Unused variable
}

// Event listeners with inconsistent formatting
document.getElementById('start').addEventListener('click', () => {
startCalculations() // Incorrect indentation
})

document.getElementById('reset').addEventListener('click', resetCalculations) // Missing semicolon

