// "Interface" simulation in JS
class TimeCalculator {
  calculateHours() {
    throw "Method not implemented!";
  }
  displayResult() {
    throw "Method not implemented!";
  }
}

// Implementation class
class DayHourCalculator extends TimeCalculator {
  calculateHours(days) {
    return days * 24;
  }

  displayResult(days, resultBox) {
    const totalHours = this.calculateHours(days);
    resultBox.innerHTML = `
      <p>${days} day${
      days > 1 ? "s" : ""
    } = <strong>${totalHours} hours</strong></p>
    `;
  }
}

// Instantiate and attach event
const calc = new DayHourCalculator();
document.getElementById("calculateBtn").addEventListener("click", () => {
  const daysInput = document.getElementById("days");
  const resultBox = document.getElementById("result");
  const days = parseInt(daysInput.value);

  if (!days || days <= 0) {
    resultBox.innerHTML =
      "<p style='color:red'>Please enter a valid number of days.</p>";
    return;
  }

  calc.displayResult(days, resultBox);
});
