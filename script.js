document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("mortgage-form");
    const resultContainer = document.getElementById("results-container");
    const paymentAmount = document.querySelector(".payment-amount");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const price = parseFloat(document.getElementById("home-price").value);
        const down = parseFloat(document.getElementById("down-payment").value);
        const annualRate = parseFloat(document.getElementById("interest-rate").value);
        const termYears = parseFloat(document.getElementById("loan-term").value);

        const principal = price - down;
        const monthlyRate = (annualRate / 100) / 12;
        const totalPayments = termYears * 12;

        let monthlyPayment;
        if (monthlyRate === 0) {
            monthlyPayment = principal / totalPayments;
        } else {
            monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
        }

        if (isNaN(monthlyPayment) || monthlyPayment < 0) {
            paymentAmount.innerText = "Invalid Input";
        } else {
            // Format as currency
            paymentAmount.innerText = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(monthlyPayment);
            
            resultContainer.classList.add("results-visible");
        }
    });
});
