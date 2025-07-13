function renderHeader() {
  const headerDiv = document.getElementById("header");

  if (!headerDiv) return;

  // Clear role and token on homepage
  if (window.location.pathname.endsWith("/")) {
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");
  }

  const role = localStorage.getItem("userRole");
  const token = localStorage.getItem("token");

  // Handle invalid access without token
  if ((role === "loggedPatient" || role === "admin" || role === "doctor") && !token) {
    localStorage.removeItem("userRole");
    alert("Session expired or invalid login. Please log in again.");
    window.location.href = "/";
    return;
  }

  let headerContent = `<div class="header-wrapper">`;

  // Admin Header
  if (role === "admin") {
    headerContent += `
      <button id="addDocBtn" class="adminBtn">Add Doctor</button>
      <a href="#" id="logoutBtn">Logout</a>
    `;
  }

  // Doctor Header
  else if (role === "doctor") {
    headerContent += `
      <a href="/doctorDashboard.html">Home</a>
      <a href="#" id="logoutBtn">Logout</a>
    `;
  }

  // Logged-in Patient Header
  else if (role === "loggedPatient") {
    headerContent += `
      <a href="/patientDashboard.html">Home</a>
      <a href="/appointments.html">Appointments</a>
      <a href="#" id="logoutPatientBtn">Logout</a>
    `;
  }

  // Unauthenticated Patient
  else if (role === "patient" || !role) {
    headerContent += `
      <a href="/login.html">Login</a>
      <a href="/signup.html">Sign Up</a>
    `;
  }

  headerContent += `</div>`;
  headerDiv.innerHTML = headerContent;

  attachHeaderButtonListeners();
}

function attachHeaderButtonListeners() {
  const addDoctorBtn = document.getElementById("addDocBtn");
  if (addDoctorBtn) {
    addDoctorBtn.addEventListener("click", () => {
      openModal("addDoctor");
    });
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
  }

  const logoutPatientBtn = document.getElementById("logoutPatientBtn");
  if (logoutPatientBtn) {
    logoutPatientBtn.addEventListener("click", logoutPatient);
  }
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userRole");
  window.location.href = "/";
}

function logoutPatient() {
  localStorage.removeItem("token");
  localStorage.setItem("userRole", "patient");
  window.location.href = "/patientDashboard.html";
}

// Run on script load
renderHeader();
