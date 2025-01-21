// Toggle between sections
const sections = document.querySelectorAll('section');
document.querySelectorAll('nav button').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    sections.forEach((section) => section.classList.add('hidden'));
    sections[index].classList.remove('hidden');
  });
});

// Simulate attendance marking
function markAttendance(student) {
  alert(`${student} marked present!`);
}

// Simulate timetable search
function searchTimetable() {
  const query = document.getElementById('timetableSearch').value;
  const results = document.getElementById('timetableResults');
  if (query) {
    results.innerHTML = `<p>Results for "${query}": No timetable found (mock).</p>`;
  } else {
    alert('Please enter a name or ID.');
  }
}

// Simulate wellness approval
function approveWellness(student) {
  alert(`Wellness check-in for ${student} approved.`);
}

// Simulate music lesson approval
function approveMusic(student) {
  alert(`Music lesson attendance for ${student} approved.`);
}

// Log absences
function logAbsence(event) {
  event.preventDefault();
  const name = document.getElementById('studentName').value;
  const reason = document.getElementById('reason').value;
  const logs = document.getElementById('absenceLogs');
  logs.innerHTML += `<p>${name} - ${reason}</p>`;
  alert(`Absence for ${name} logged.`);
}
