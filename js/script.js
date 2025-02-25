document.getElementById("enterButton").addEventListener("click", function() {
    let input = document.getElementById("userInput").value;
    let number = parseInt(input);

    if (isNaN(number) || number < 0) {
        document.getElementById("resultScreen").textContent = "Invalid input! Enter a non-negative number.";
        return;
    }

    let result = factorial(number);
    document.getElementById("resultScreen").textContent = `${number}! = ${result}`;
});

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
}