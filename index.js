const form = document.querySelector("form");

/*---
Monthly Payment Formula

Payment = [(interest rate / 12 months) x Principal] / [1 - (1 + interest rate / 12)^(-num months)]
---*/

function formatMoney(amount) {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  };
  const formatter = new Intl.NumberFormat("en-US", options);
  return formatter.format(amount);
}

function calculate(e) {
  e.preventDefault();
  const totalAmount = document.querySelector(".totalAmount");
  const monthlyPayment = document.querySelector(".monthlyPayment");
  const basePrice = parseFloat(document.querySelector("#basePrice").value);
  const interestRate =
    parseFloat(document.querySelector("#interestRate").value) / 100;
  const loanTerm = parseFloat(document.querySelector("#loanTerm").value) * 12;
  const payment =
    ((interestRate / 12) * basePrice) /
    (1 - Math.pow(1 + interestRate / 12, loanTerm * -1));
  const total = payment * loanTerm;
  monthlyPayment.innerHTML = `${formatMoney(payment)}`;
  totalAmount.innerHTML = `${formatMoney(total)}`;
}

form.addEventListener("submit", calculate);
