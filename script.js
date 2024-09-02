const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let displayValue = '';

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const value = this.textContent;

        if (value === 'CLEAR') {
            displayValue = '';
        } else if (value === 'DELETE') {
            displayValue = displayValue.slice(0, -1);
        } else if (value === '=') {
            try {
                displayValue = eval(displayValue.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-'));
            } catch {
                displayValue = 'Error';
            }
        } else {
            displayValue += value;
        }

        display.value = displayValue;
    });
});