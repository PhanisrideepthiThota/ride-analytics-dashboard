# Ride Analytics Dashboard

Ride Analytics Dashboard is a full-stack analytics application that transforms ride-sharing data into actionable insights using SQL aggregation queries. Built with React, Express.js, and SQL.js, it provides REST APIs and an interactive dashboard to visualize driver performance, ride statistics, and operational metrics.

## Overview

Ride-sharing platforms generate large volumes of driver and trip data, but extracting meaningful insights from it typically requires a structured analytics layer. This project implements a centralized dashboard that runs SQL aggregation queries over a relational dataset and exposes the results through a REST API consumed by a React frontend.

## Problem Statement

Ride-sharing platforms accumulate large amounts of data on drivers, rides, and performance metrics, but this raw data has limited value without a system to process and interpret it. Operators need a way to answer practical questions — which drivers are fastest, most reliable, or most active, and how rides are trending overall — without manually querying the database each time. This project addresses that gap with a dashboard that turns raw ride data into structured, actionable insights.

## Tech Stack

**Frontend:** React, Vite, CSS3, Fetch API

**Backend:** Node.js, Express.js

**Database:** SQL.js (SQLite compiled to WebAssembly)

**Tools:** Git, GitHub, VS Code, npm

## Features

- Dashboard summary: total drivers, total rides, completed rides, cancelled rides
- View all drivers and all rides
- Search drivers by name
- Top 5 fastest drivers (by average trip duration)
- Top 5 most reliable drivers (by average rating)
- Top 5 most active drivers (by ride count)
- REST API backing all dashboard views

## Architecture

```
Frontend (React + Vite)
        │
        │ Fetch API
        ▼
Backend (Node.js + Express)
        │
        │ SQL Queries
        ▼
Database (SQL.js)
```

## Database Schema

**Drivers**
`driver_id`, `driver_name`, `phone`, `city`, `vehicle`, `rating`, `status`

**Rides**
`ride_id`, `driver_id`, `pickup`, `drop_location`, `distance_km`, `trip_duration`, `fare`, `status`

**Relationship:** One driver → many rides

## Analytics Logic

Dashboard insights are computed with SQL aggregation queries using `GROUP BY`, `ORDER BY`, `LIMIT`, and `JOIN`:

| Metric | Query Logic |
|---|---|
| Fastest Drivers | Lowest `AVG(trip_duration)` |
| Most Reliable Drivers | Highest `AVG(rating)` |
| Most Active Drivers | Highest `COUNT(ride_id)` |
| Dashboard Stats | `COUNT()` over drivers and rides |

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/drivers/dashboard` | Summary statistics |
| GET | `/api/drivers/all-drivers` | List of all drivers |
| GET | `/api/drivers/all-rides` | List of all rides |
| GET | `/api/drivers/fastest` | Top 5 fastest drivers |
| GET | `/api/drivers/reliable` | Top 5 most reliable drivers |
| GET | `/api/drivers/active` | Top 5 most active drivers |

## Project Structure

```
backend/
  db.js
  drivers.js
  server.js

src/
  components/
    Header.jsx
    DashboardCards.jsx
    DataTable.jsx
  App.jsx
  App.css
  main.jsx
```

## Why SQL.js?

SQL.js runs SQLite in-memory via WebAssembly, removing the need for an external database server. This keeps the project lightweight and easy to run locally without additional setup.

## Challenges

- Designing SQL queries that produce accurate, meaningful analytics
- Modeling the one-to-many relationship between drivers and rides
- Keeping data flow consistent between backend and frontend
- Managing state and rendering dynamic tables in React

## What I Learned

- Building a full-stack app with a React frontend and Express backend
- Designing a relational schema and writing aggregation queries
- Exposing data through a REST API and consuming it on the frontend
- Structuring a project for readability and maintainability

## Future Improvements

- JWT-based authentication
- Pagination for large datasets
- Interactive charts for ride/driver trends
- Exportable reports (CSV/PDF)
- Migration to Spring Boot + MySQL for a production-grade backend
