import express from "express";
import { query } from "./db.js";

const router = express.Router();

/*
    Converts SQL.js output into JSON
*/
function formatResult(result) {

    const { columns, values } = result;

    return values.map(row => {

        let object = {};

        columns.forEach((column, index) => {
            object[column] = row[index];
        });

        return object;

    });

}

//////////////////////////////////////////////////////
// Get All Drivers
//////////////////////////////////////////////////////

router.get("/all-drivers", (req, res) => {

    const sql = `
        SELECT *
        FROM Drivers;
    `;

    res.json(formatResult(query(sql)));

});

//////////////////////////////////////////////////////
// Get All Rides
//////////////////////////////////////////////////////

router.get("/all-rides", (req, res) => {

    const sql = `
        SELECT *
        FROM Rides;
    `;

    res.json(formatResult(query(sql)));

});

//////////////////////////////////////////////////////
// Fastest Drivers
// Lowest Average Trip Duration
//////////////////////////////////////////////////////

router.get("/fastest", (req, res) => {

    const sql = `

        SELECT
            d.driver_name,
            d.vehicle,
            ROUND(AVG(r.trip_duration),2) AS average_duration

        FROM Drivers d

        JOIN Rides r

        ON d.driver_id = r.driver_id

        WHERE r.status = 'COMPLETED'

        GROUP BY d.driver_id

        ORDER BY average_duration ASC

        LIMIT 5;

    `;

    res.json(formatResult(query(sql)));

});

//////////////////////////////////////////////////////
// Most Reliable Drivers
// Highest Completed Trips
//////////////////////////////////////////////////////

router.get("/reliable", (req, res) => {

    const sql = `

        SELECT

            d.driver_name,

            d.vehicle,

            COUNT(*) AS completed_rides

        FROM Drivers d

        JOIN Rides r

        ON d.driver_id = r.driver_id

        WHERE r.status='COMPLETED'

        GROUP BY d.driver_id

        ORDER BY completed_rides DESC

        LIMIT 5;

    `;

    res.json(formatResult(query(sql)));

});

//////////////////////////////////////////////////////
// Most Active Drivers
// Highest Total Trips
//////////////////////////////////////////////////////

router.get("/active", (req, res) => {

    const sql = `

        SELECT

            d.driver_name,

            d.vehicle,

            COUNT(*) AS total_rides

        FROM Drivers d

        JOIN Rides r

        ON d.driver_id = r.driver_id

        GROUP BY d.driver_id

        ORDER BY total_rides DESC

        LIMIT 5;

    `;

    res.json(formatResult(query(sql)));

});

//////////////////////////////////////////////////////
// Dashboard Summary
//////////////////////////////////////////////////////

router.get("/dashboard", (req, res) => {

    const sql = `

        SELECT

            (SELECT COUNT(*) FROM Drivers) AS total_drivers,

            (SELECT COUNT(*) FROM Rides) AS total_rides,

            (SELECT COUNT(*) FROM Rides WHERE status='COMPLETED') AS completed_rides,

            (SELECT COUNT(*) FROM Rides WHERE status='CANCELLED') AS cancelled_rides;

    `;

    res.json(formatResult(query(sql)));

});

export { router };