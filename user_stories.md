# User Story Template

**Title:**
*As a \[user role], I want \[feature/goal], so that \[reason].*

**Acceptance Criteria:**

1. \[Criteria 1]
2. \[Criteria 2]
3. \[Criteria 3]

**Priority:** \[High/Medium/Low]

**Story Points:** \[Estimated Effort in Points]

**Notes:**

* \[Additional information or edge cases]

---

# Admin User Stories

**Title:** Admin login
*As an admin, I want to log into the portal with my username and password, so that I can manage the platform securely.*

**Acceptance Criteria:**

1. Admin can access login page
2. Admin can log in with valid credentials
3. Incorrect login shows an error message

**Priority:** High
**Story Points:** 2
**Notes:**

* Authentication uses secure JWT-based system

---

**Title:** Admin logout
*As an admin, I want to log out of the portal, so that I can protect system access.*

**Acceptance Criteria:**

1. Admin can click logout
2. Session is cleared after logout
3. Redirects to login page

**Priority:** High
**Story Points:** 1
**Notes:**

* Token must be invalidated client-side

---

**Title:** Add doctors
*As an admin, I want to add doctors to the portal, so that they can start accepting appointments.*

**Acceptance Criteria:**

1. Admin can access add doctor form
2. Form requires name, specialization, contact, and availability
3. Doctor appears in doctor list

**Priority:** High
**Story Points:** 3
**Notes:**

* Email should be unique

---

**Title:** Delete doctor
*As an admin, I want to delete a doctor's profile from the portal, so that old or inactive profiles can be removed.*

**Acceptance Criteria:**

1. Admin can see delete button for each doctor
2. Confirmation modal before delete
3. Deleted doctor is removed from system

**Priority:** Medium
**Story Points:** 2
**Notes:**

* Related appointments are also removed

---

**Title:** Run usage stored procedure
*As an admin, I want to run a stored procedure in MySQL CLI to get the number of appointments per month, so that I can track platform usage.*

**Acceptance Criteria:**

1. Admin has SQL CLI access
2. Stored procedure returns appointment counts
3. Results grouped by month

**Priority:** Medium
**Story Points:** 2
**Notes:**

* Procedure: `GetDoctorWithMostPatientsByMonth`

---

# Patient User Stories

**Title:** View doctors without login
*As a patient, I want to view a list of doctors without logging in, so that I can explore options before registering.*

**Acceptance Criteria:**

1. Doctor list visible publicly
2. Search by name or specialty
3. Limited profile view

**Priority:** Medium
**Story Points:** 2

---

**Title:** Patient registration
*As a patient, I want to sign up using email and password, so that I can book appointments.*

**Acceptance Criteria:**

1. Email validation and secure password
2. Confirmation on successful registration
3. Redirect to login page

**Priority:** High
**Story Points:** 2

---

**Title:** Patient login
*As a patient, I want to log into the portal, so that I can manage my bookings.*

**Acceptance Criteria:**

1. Valid login with token generation
2. Login error for incorrect credentials
3. Redirect to dashboard

**Priority:** High
**Story Points:** 1

---

**Title:** Book appointment
*As a patient, I want to book an hour-long appointment with a doctor, so that I can consult on my health.*

**Acceptance Criteria:**

1. Select doctor, date, and time
2. Check slot availability
3. Confirmation on successful booking

**Priority:** High
**Story Points:** 3

---

**Title:** View upcoming appointments
*As a patient, I want to view my upcoming appointments, so that I can prepare accordingly.*

**Acceptance Criteria:**

1. List of appointments in dashboard
2. Includes date, time, doctor name
3. Filter by date

**Priority:** Medium
**Story Points:** 2

---

# Doctor User Stories

**Title:** Doctor login
*As a doctor, I want to log into the portal, so that I can manage my appointments.*

**Acceptance Criteria:**

1. Valid credentials login
2. Redirect to doctor dashboard
3. Session is secure

**Priority:** High
**Story Points:** 1

---

**Title:** Doctor logout
*As a doctor, I want to log out of the portal, so that I can protect my data.*

**Acceptance Criteria:**

1. Click logout button
2. Token is cleared
3. Redirect to login page

**Priority:** Medium
**Story Points:** 1

---

**Title:** View appointment calendar
*As a doctor, I want to view my appointment calendar, so that I can stay organized.*

**Acceptance Criteria:**

1. Show date and time of appointments
2. Include patient name and reason
3. Sort by date

**Priority:** High
**Story Points:** 2

---

**Title:** Mark unavailability
*As a doctor, I want to mark my unavailability, so that patients can only book available slots.*

**Acceptance Criteria:**

1. Select date/time to block
2. Prevent bookings for blocked slots
3. Confirmation message

**Priority:** High
**Story Points:** 3

---

**Title:** Update doctor profile
*As a doctor, I want to update my profile with specialization and contact info, so that patients have up-to-date information.*

**Acceptance Criteria:**

1. Edit form with profile data
2. Save and reflect changes
3. Email cannot be changed

**Priority:** Medium
**Story Points:** 2

---

**Title:** View patient details
*As a doctor, I want to view patient details for upcoming appointments, so that I can be prepared.*

**Acceptance Criteria:**

1. Access list from dashboard
2. View patient history
3. View reason for visit

**Priority:** High
**Story Points:** 2
