import { useEffect, useState } from "react";

import Header from "./components/Header";
import DashboardCards from "./components/DashboardCards";
import DataTable from "./components/DataTable";

import "./App.css";

const API = "http://localhost:5000/api/drivers";

function App() {

    const [dashboard, setDashboard] = useState({});
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const [search, setSearch] = useState("");
    const [title, setTitle] = useState("All Drivers");

    useEffect(() => {
        loadDashboard();
        loadDrivers();
    }, []);

    // ==========================
    // Dashboard
    // ==========================

    async function loadDashboard() {

        const response = await fetch(`${API}/dashboard`);
        const data = await response.json();

        setDashboard(data[0]);

    }

    // ==========================
    // Drivers
    // ==========================

    async function loadDrivers() {

        const response = await fetch(`${API}/all-drivers`);
        const data = await response.json();

        setRows(data);

        setColumns([
            "driver_id",
            "driver_name",
            "phone",
            "city",
            "vehicle",
            "rating",
            "status"
        ]);

        setTitle("All Drivers");

    }

    // ==========================
    // Rides
    // ==========================

    async function loadRides() {

        const response = await fetch(`${API}/all-rides`);
        const data = await response.json();

        setRows(data);

        setColumns([
            "ride_id",
            "driver_id",
            "pickup",
            "drop_location",
            "distance_km",
            "trip_duration",
            "fare",
            "status"
        ]);

        setTitle("All Rides");

    }

    // ==========================
    // Fastest Drivers
    // ==========================

    async function loadFastest() {

        const response = await fetch(`${API}/fastest`);
        const data = await response.json();

        setRows(data);

        setColumns([
            "driver_name",
            "average_duration"
        ]);

        setTitle("⚡ Fastest Drivers");

    }

    // ==========================
    // Reliable Drivers
    // ==========================

    async function loadReliable() {

        const response = await fetch(`${API}/reliable`);
        const data = await response.json();

        setRows(data);

        setColumns([
            "driver_name",
            "completed_rides"
        ]);

        setTitle("⭐ Most Reliable Drivers");

    }

    // ==========================
    // Active Drivers
    // ==========================

    async function loadActive() {

        const response = await fetch(`${API}/active`);
        const data = await response.json();

        setRows(data);

        setColumns([
            "driver_name",
            "total_rides"
        ]);

        setTitle("📈 Most Active Drivers");

    }

    // ==========================
    // Search
    // ==========================

    const filteredRows = rows.filter((row) => {

        if (!row.driver_name) return true;

        return row.driver_name
            .toLowerCase()
            .includes(search.toLowerCase());

    });

    return (

        <div className="app-shell">

            <Header />

            <DashboardCards dashboard={dashboard} />

            <div className="search-box">

                <input
                    type="text"
                    placeholder="🔍 Search driver by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <div className="controls">

                <button onClick={loadDrivers}>
                    🚗 Drivers
                </button>

                <button onClick={loadRides}>
                    🛣️ Rides
                </button>

                <button onClick={loadFastest}>
                    ⚡ Fastest
                </button>

                <button onClick={loadReliable}>
                    ⭐ Reliable
                </button>

                <button onClick={loadActive}>
                    📈 Active
                </button>

            </div>

            <div className="card">

                <h2>{title}</h2>

                <DataTable
                    columns={columns}
                    rows={filteredRows}
                />

            </div>

            <footer>

                <p>
                    🚖 Ride Analytics Dashboard • Developed by Phani Sri Deepthi • 2026
                </p>

            </footer>

        </div>

    );

}

export default App;