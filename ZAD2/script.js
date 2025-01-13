function calculate() {
    const firstNumber = parseFloat(document.getElementById('first_number').value);
    const secondNumber = parseFloat(document.getElementById('second_number').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case 'add':
            result = firstNumber + secondNumber;
            break;
        case 'subtract':
            result = firstNumber - secondNumber;
            break;
        case 'multiply':
            result = firstNumber * secondNumber;
            break;
        case 'divide':
            result = firstNumber / secondNumber;
            if (secondNumber === 0) {
                result = 'Cannot divide by zero';
                alert('Cannot divide by zero');
            }
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').innerHTML = result;
}