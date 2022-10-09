const digits = document.querySelectorAll('.digit');

let idx;
digits[0].focus();

digits.forEach((digit, i) => {
    digit.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            nextInputs(i)
        } else if (e.key === 'Backspace') {
            prevInputs(i);
        };
    });
});

function nextInputs(i) {
    if (i < 5) {
        setTimeout(() => {
            digits[i + 1].disabled = false;
            digits[i + 1].focus();
        }, 1);
    };
}

function prevInputs(i) {
    if (i > 0) {
        setTimeout(() => {
            digits[i - 1].focus();
        }, 1);
    };
}