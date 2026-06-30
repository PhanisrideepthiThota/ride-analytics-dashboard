# 🚖 Ride Analytics Dashboard

A full-stack Ride Analytics Dashboard developed using **React**, **Express.js**, and **SQL.js**. The application provides REST APIs to manage driver and ride information while displaying analytics such as the fastest, most reliable, and most active drivers through a clean dashboard interface.

---

## 📌 Features

- 📊 Dashboard Statistics
  - Total Drivers
  - Total Rides
  - Completed Rides
  - Cancelled Rides

- 🚗 View All Drivers

- 🛣️ View All Rides

- ⚡ Top 5 Fastest Drivers

- ⭐ Top 5 Most Reliable Drivers

- 📈 Top 5 Most Active Drivers

- 🔍 Search Drivers by Name

- 🌐 REST API Integration

- 💻 Responsive Dashboard UI

---

## 🛠 Tech Stack

### Frontend
- React
- CSS3
- Fetch API

### Backend
- Node.js
- Express.js

### Database
- SQL.js (In-Memory SQL Database)

---

## 🗄 Database Tables

### Drivers

| Column |
|---------|
| driver_id |
| driver_name |
| phone |
| city |
| vehicle |
| rating |
| status |

### Rides

| Column |
|---------|
| ride_id |
| driver_id |
| pickup |
| drop_location |
| distance_km |
| trip_duration |
| fare |
| status |

---

## 🧠 SQL Concepts Used

- SELECT
- WHERE
- JOIN
- GROUP BY
- ORDER BY
- COUNT()
- AVG()
- ROUND()
- LIMIT
- PRIMARY KEY
- FOREIGN KEY

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/drivers/dashboard | Dashboard statistics |
| GET | /api/drivers/all-drivers | List all drivers |
| GET | /api/drivers/all-rides | List all rides |
| GET | /api/drivers/fastest | Top 5 fastest drivers |
| GET | /api/drivers/reliable | Top 5 reliable drivers |
| GET | /api/drivers/active | Top 5 active drivers |

---

## 📂 Project Structure

```
Ride Analytics Dashboard
│
├── backend
│   ├── db.js
│   ├── drivers.js
│   └── server.js
│
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── DashboardCards.jsx
│   │   └── DataTable.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── README.md
└── vite.config.js
```

---

## ▶️ How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/PhanisrideepthiThota/ride-analytics-dashboard.git
```

### 2. Move into the Project

```bash
cd ride-analytics-dashboard
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Application

```bash
npm run dev
```

### Backend

Runs on:

```
http://localhost:5000
```

### Frontend

Runs on:

```
http://localhost:5173
```

(or another available Vite port such as 5174)

---
## 📸 Dashboard Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/95376529-c9da-4edb-887c-6a511e360369" />

</p>

## 🎯 Future Improvements

- Authentication
- Pagination
- Charts & Visual Analytics
- Export Reports
- Spring Boot + MySQL Migration

---

## 👩‍💻 Author

**Phani Sri Deepthi**

GitHub:
https://github.com/PhanisrideepthiThota

---

## ⭐ If you like this project

Give it a ⭐ on GitHub.
