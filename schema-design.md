## MySQL Database Design

### Table: patients

* id: INT, PRIMARY KEY, AUTO\_INCREMENT
* name: VARCHAR(100), NOT NULL
* email: VARCHAR(100), UNIQUE, NOT NULL
* phone: VARCHAR(15)
* password: VARCHAR(255), NOT NULL
* created\_at: DATETIME DEFAULT CURRENT\_TIMESTAMP

### Table: doctors

* id: INT, PRIMARY KEY, AUTO\_INCREMENT
* name: VARCHAR(100), NOT NULL
* email: VARCHAR(100), UNIQUE, NOT NULL
* specialization: VARCHAR(100), NOT NULL
* contact: VARCHAR(50)
* availability: TEXT (JSON format or structured string)
* created\_at: DATETIME DEFAULT CURRENT\_TIMESTAMP

### Table: appointments

* id: INT, PRIMARY KEY, AUTO\_INCREMENT
* patient\_id: INT, FOREIGN KEY REFERENCES patients(id) ON DELETE CASCADE
* doctor\_id: INT, FOREIGN KEY REFERENCES doctors(id) ON DELETE CASCADE
* appointment\_time: DATETIME, NOT NULL
* status: INT DEFAULT 0  -- 0 = Scheduled, 1 = Completed, 2 = Cancelled
* created\_at: DATETIME DEFAULT CURRENT\_TIMESTAMP

### Table: admins

* id: INT, PRIMARY KEY, AUTO\_INCREMENT
* username: VARCHAR(50), UNIQUE, NOT NULL
* password: VARCHAR(255), NOT NULL
* email: VARCHAR(100)

### Table: prescriptions

* id: INT, PRIMARY KEY, AUTO\_INCREMENT
* appointment\_id: INT, FOREIGN KEY REFERENCES appointments(id) ON DELETE CASCADE
* medication: TEXT
* dosage: VARCHAR(50)
* instructions: TEXT
* created\_at: DATETIME DEFAULT CURRENT\_TIMESTAMP

\-- Optional Additional Tables:

### Table: clinic\_locations (optional)

* id: INT, PRIMARY KEY, AUTO\_INCREMENT
* name: VARCHAR(100)
* address: VARCHAR(255)

### Table: payments (optional)

* id: INT, PRIMARY KEY, AUTO\_INCREMENT
* appointment\_id: INT, FOREIGN KEY REFERENCES appointments(id)
* amount: DECIMAL(10, 2)
* payment\_time: DATETIME
* method: VARCHAR(50)

## MongoDB Collection Design

### Collection: prescriptions

```json
{
  "_id": "ObjectId('64abc123456')",
  "patientId": 51,
  "appointmentId": 202,
  "medication": [
    { "name": "Paracetamol", "dosage": "500mg", "frequency": "Every 6 hours" },
    { "name": "Cough Syrup", "dosage": "10ml", "frequency": "Twice daily" }
  ],
  "doctorNotes": "Avoid cold drinks and take rest.",
  "issuedDate": "2025-07-12T14:30:00Z",
  "refillCount": 1,
  "pharmacy": {
    "name": "Apollo Pharmacy",
    "location": "Chennai Central"
  }
}
```

### Collection: feedback

```json
{
  "_id": "ObjectId('64def567890')",
  "patientId": 44,
  "doctorId": 13,
  "appointmentId": 301,
  "rating": 4.5,
  "comments": "Very helpful and patient.",
  "timestamp": "2025-07-11T09:00:00Z"
}
```

### Collection: activity\_logs

```json
{
  "_id": "ObjectId('64ef901234')",
  "userId": 12,
  "userRole": "doctor",
  "action": "Logged in",
  "timestamp": "2025-07-13T08:45:00Z",
  "ip": "192.168.0.5"
}
```

### Notes:

* Use MySQL for structured, core data.
* Use MongoDB for logs, notes, metadata, and documents that may evolve.
* Avoid duplicating core schema in both databases; link via IDs if necessary.
