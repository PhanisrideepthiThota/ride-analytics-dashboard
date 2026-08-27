# 🚖 Ride Analytics Dashboard

A full-stack ride analytics application that turns driver and ride data into structured insights through SQL queries and an interactive React dashboard.

### 🚀 Live Demo

[**Open Ride Analytics Dashboard →**](https://ride-analytics-dashboard.vercel.app)

### 💻 Source Code

[**GitHub Repository →**](https://github.com/PhanisrideepthiThota/ride-analytics-dashboard)

---

## 📌 Overview

Ride-sharing platforms generate large amounts of data about drivers, rides, trip duration, fares, ratings, and ride status. However, raw data becomes useful only when it can be queried and presented in a way that helps users understand performance.

This project was built as a **self-driven full-stack learning project** to explore how a React frontend can communicate with an Express.js backend, how REST APIs can expose database results, and how SQL aggregation queries can be used to generate useful ride and driver analytics.

The dashboard allows users to view overall ride statistics, search drivers, explore ride information, and identify drivers based on speed, reliability, and activity.

---

## 🎯 Problem Statement

Ride-sharing platforms accumulate large amounts of data on drivers and rides, but raw data alone does not provide meaningful insights.

Operators may need to answer questions such as:

- Who are the fastest drivers?
- Which drivers have the highest ratings?
- Which drivers complete the most rides?
- How many rides are completed or cancelled?
- What are the available driver and ride records?

Manually querying the database for each of these questions is inefficient.

This project addresses that gap by providing a **centralized analytics dashboard** that uses SQL queries to process ride and driver data and exposes the results through REST APIs for a React-based user interface.

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- CSS3
- Fetch API

### Backend

- Node.js
- Express.js
- REST APIs
- CORS

### Database

- SQL.js
- SQLite
- WebAssembly

### Tools

- Git
- GitHub
- VS Code
- npm

### Deployment

- Vercel — Frontend
- Render — Backend

---

## ✨ Features

- 📊 Dashboard summary:
  - Total drivers
  - Total rides
  - Completed rides
  - Cancelled rides

- 🚗 View all drivers
- 🛣️ View all rides
- 🔍 Search drivers by name
- ⚡ Top 5 fastest drivers
- ⭐ Top 5 most reliable drivers
- 📈 Top 5 most active drivers
- 🔌 REST API based data flow
- 📱 Interactive React dashboard

---

## 🏗️ Architecture

The application follows a simple frontend-backend-database architecture.

```text
                    User
                     │
                     ▼
            React + Vite Frontend
                     │
                Fetch API
                     │
                     ▼
             Node.js + Express
                     │
                 REST APIs
                     │
                     ▼
                  SQL.js
                     │
                SQL Queries
                     │
                     ▼
          Drivers + Rides Data
```


### How the Application Works

1. The user interacts with the dashboard through the React frontend.
2. React sends HTTP requests to the Express backend using the Fetch API.
3. Express receives the request through the appropriate REST API endpoint.
4. The backend executes SQL queries against the SQL.js database.
5. The query results are returned from the backend as JSON.
6. React receives the response and updates the dashboard or table.

### Example Request Flow

When the user clicks **⚡ Fastest Drivers**:

```text
User clicks "Fastest"
        ↓
React calls GET /api/drivers/fastest
        ↓
Express receives the request
        ↓
Backend executes SQL query
        ↓
SQL.js returns the results
        ↓
Express sends JSON response
        ↓
React updates the table
        ↓
User sees the fastest drivers
```

---

## 🌐 Deployment Architecture

The frontend and backend are deployed separately.

```text
                    User
                      │
                      ▼
             Vercel Frontend
             React + Vite
                      │
                HTTP Request
                      │
                      ▼
             Render Backend
             Node.js + Express
                      │
                      ▼
                  SQL.js
                   SQLite
```

The frontend communicates with the deployed backend using the `VITE_API_URL` environment variable.

---

## 🗄️ Database Schema

The application uses two main tables: **Drivers** and **Rides**.

### Drivers Table

| Column | Description |
|---|---|
| `driver_id` | Unique identifier for a driver |
| `driver_name` | Driver's name |
| `phone` | Driver's phone number |
| `city` | Driver's city |
| `vehicle` | Driver's vehicle |
| `rating` | Driver rating |
| `status` | Driver status |

### Rides Table

| Column | Description |
|---|---|
| `ride_id` | Unique identifier for a ride |
| `driver_id` | Driver associated with the ride |
| `pickup` | Ride pickup location |
| `drop_location` | Ride destination |
| `distance_km` | Distance travelled |
| `trip_duration` | Duration of the trip |
| `fare` | Ride fare |
| `status` | Ride status |

### Relationship

A driver can have multiple rides.

```text
Drivers
   │
   │ driver_id
   ▼
Rides

One Driver ───────► Many Rides
```

The `driver_id` in the `Rides` table connects each ride to its corresponding driver.

---

## 📊 Analytics Logic

The dashboard uses SQL queries to calculate and retrieve useful information from the driver and ride data.

| Analytics | SQL Logic |
|---|---|
| Fastest Drivers | Average trip duration |
| Most Reliable Drivers | Driver rating |
| Most Active Drivers | Number of rides |
| Dashboard Statistics | Counts of drivers and rides |

SQL concepts used include:

- `SELECT`
- `COUNT()`
- `AVG()`
- `GROUP BY`
- `ORDER BY`
- `LIMIT`
- `JOIN`

These queries allow the backend to transform raw database records into results that can be displayed on the dashboard.

---

## 🔌 REST API Endpoints

The Express backend exposes the following REST API endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/api/drivers/dashboard` | Returns dashboard summary statistics |
| `GET` | `/api/drivers/all-drivers` | Returns all driver records |
| `GET` | `/api/drivers/all-rides` | Returns all ride records |
| `GET` | `/api/drivers/fastest` | Returns the fastest drivers |
| `GET` | `/api/drivers/reliable` | Returns the most reliable drivers |
| `GET` | `/api/drivers/active` | Returns the most active drivers |

The frontend communicates with these endpoints using HTTP `GET` requests and receives the results as JSON.

---

## 📁 Project Structure

```text
ride-analytics-dashboard/
│
├── backend/
│   ├── db.js
│   ├── drivers.js
│   └── server.js
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── DashboardCards.jsx
│   │   └── DataTable.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── vite.config.js
└── index.html
```

### Important Files

| File | Responsibility |
|---|---|
| `App.jsx` | Main React component and API interaction |
| `Header.jsx` | Dashboard header |
| `DashboardCards.jsx` | Displays summary statistics |
| `DataTable.jsx` | Displays dynamic driver/ride data |
| `server.js` | Creates and starts the Express server |
| `drivers.js` | Defines driver-related API routes and SQL queries |
| `db.js` | Initializes and manages the SQL.js database |

---

## 📸 Dashboard Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/95376529-c9da-4edb-887c-6a511e360369"
       alt="Ride Analytics Dashboard"
       width="900">
</p>

---

## 💡 Why SQL.js?

SQL.js allows the project to use SQLite through WebAssembly without requiring a separately installed database server.

This makes the application lightweight and simple to run locally while providing practical experience with:

- Relational databases
- SQL queries
- Aggregation
- Joins
- Filtering
- Sorting
- Grouping

---

## 🧠 Challenges

Some of the main challenges encountered while building the project were:

- Designing SQL queries for different analytics requirements
- Working with the one-to-many relationship between drivers and rides
- Connecting the React frontend with REST APIs
- Managing React state when switching between different dashboard views
- Rendering dynamic table columns and data
- Configuring environment variables for frontend-backend communication
- Deploying the frontend and backend as separate services

---

## 📚 What I Learned

Through this project, I gained practical experience with:

- Building a React frontend
- Creating REST APIs using Express.js
- Working with relational data
- Writing SQL aggregation queries
- Connecting a frontend application to a backend API
- Managing state in React
- Using Git and GitHub for version control
- Working with environment variables
- Deploying a frontend using Vercel
- Deploying a backend using Render

---

## 🚀 Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/PhanisrideepthiThota/ride-analytics-dashboard.git
cd ride-analytics-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create the environment file

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:5000
```

### 4. Start the application

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

The backend will run on:

```text
http://localhost:5000
```

---

## 🌐 Live Deployment

### Frontend

**Vercel**

[**Open Live Dashboard →**](https://ride-analytics-dashboard.vercel.app)

### Backend

**Render**

```text
https://ride-analytics-dashboard.onrender.com
```

The React frontend communicates with the deployed Express backend using the `VITE_API_URL` environment variable.

---

## 🔮 Future Improvements

Possible future improvements include:

- 🔐 JWT-based authentication
- 📄 Pagination for larger datasets
- 📊 Interactive charts for ride and driver trends
- 📥 CSV/PDF report export
- 🔎 More advanced analytics and filtering
- ☕ Migration to Spring Boot + MySQL for a more production-oriented backend
