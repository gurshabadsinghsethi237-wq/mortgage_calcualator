function calculateMortgage() {
    const price = parseFloat(document.getElementById('price').value);
    const down = parseFloat(document.getElementById('down').value);
    const annualRate = parseFloat(document.getElementById('rate').value);
    const termYears = parseFloat(document.getElementById('term').value);

    const principal = price - down;
    const monthlyRate = (annualRate / 100) / 12;
    const totalPayments = termYears * 12;

    if (monthlyRate === 0) {
        var monthlyPayment = principal / totalPayments;
    } else {
        var monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    }

    document.getElementById('result').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}
