javascript


function calculateAge() {
  const dob = document.getElementById('dob').value;
  if (!dob) {
    document.getElementById('result').innerText = 'Please select your date of birth.';
    return;
  }
  const dobDate = new Date(dob);
  const today = new Date();
  let years = today.getFullYear() - dobDate.getFullYear();
  let months = today.getMonth() - dobDate.getMonth();
  let days = today.getDate() - dobDate.getDate();
  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  document.getElementById('result').innerText =
    `You are ${years} years, ${months} months, and ${days} days old.`;
}
document.getElementById('year').textContent = new Date().getFullYear();