function calculate(x, y, operation) {
    let result;
  
    switch (operation) {
      case 'add':
        result = x + y;
        break;
      case 'subtract':
        result = x - y;
        break;
      case 'multiply':
        result = x * y;
        break;
      case 'divide':
        result = y !== 0 ? x / y : 'Cannot divide by zero';
        break;
      default:
        result = null;
    }
  
    return result;
  }
  
  let again = 'y';
  
  do {
    let num1 = parseFloat(prompt('Enter the first number:'));
    let num2 = parseFloat(prompt('Enter the second number:'));
    let operation = prompt('Enter operation (add, subtract, multiply, divide):').toLowerCase();
  
    let result = calculate(num1, num2, operation);
  
    if (result === null) {
      alert('Invalid operation. Please enter add, subtract, multiply, or divide.');
    } else {
      alert(`The result of ${operation}ing ${num1} and ${num2} is ${result}`);
    }
  
    again = prompt('Would you like to perform another calculation? (y or n)', 'y').toLowerCase();
  } while (again === 'y');
  
  alert('Calculator closed.');
  