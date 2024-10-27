// Web Worker for factorial calculation
function calculateFactorial(n) {
    if (n < 0) return -1
    else if (n === 0) return 1
    else return n * calculateFactorial(n - 1)
}

// Thread message handling
onmessage = function(event) {
    const number = event.data;
    const result = calculateFactorial(number);
    postMessage({ number, result });
}

