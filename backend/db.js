import initSqlJs from "sql.js";
import path from "path";
import { fileURLToPath } from "url";

let db;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Database
async function initDB() {

    const SQL = await initSqlJs({
        locateFile: file =>
            path.resolve(__dirname, "../node_modules/sql.js/dist", file),
    });

    db = new SQL.Database();

    // ===========================
    // Drivers Table
    // ===========================
    db.run(`
        CREATE TABLE Drivers (
            driver_id INTEGER PRIMARY KEY,
            driver_name TEXT NOT NULL,
            phone TEXT,
            city TEXT,
            vehicle TEXT,
            rating REAL,
            status TEXT
        );
    `);

    // ===========================
    // Rides Table
    // ===========================
    db.run(`
        CREATE TABLE Rides (
            ride_id INTEGER PRIMARY KEY,
            driver_id INTEGER,
            pickup TEXT,
            drop_location TEXT,
            distance_km INTEGER,
            trip_duration INTEGER,
            fare INTEGER,
            status TEXT,
            FOREIGN KEY(driver_id) REFERENCES Drivers(driver_id)
        );
    `);

    // ===========================
    // Driver Data
    // ===========================
    const insertDriver = db.prepare(`
        INSERT INTO Drivers
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    const drivers = [

        [1, "Radha Rani", "9876543210", "Hyderabad", "Hyundai Creta", 4.8, "Available"],

        [2, "Hima Bindhu", "9123456780", "Vijayawada", "Tata Nexon", 4.7, "On Trip"],

        [3, "Jyoshna sai", "9012345678", "Visakhapatnam", "Maruti Dzire", 4.9, "Available"],

        [4, "Deepthi", "9988776655", "Bengaluru", "Toyota Innova", 4.6, "Offline"],

        [5, "Arjun", "9871234567", "Pune", "Mahindra XUV700", 4.9, "Available"],

        [6, "Vasudev Krishna", "9765432109", "Chennai", "Kia Carens", 4.8, "On Trip"]

    ];

    drivers.forEach(driver => insertDriver.run(driver));
    insertDriver.free();

    // ===========================
    // Ride Data
    // ===========================
    const insertRide = db.prepare(`
        INSERT INTO Rides
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const rides = [

        [101,1,"Hitech City","Hyderabad Airport",28,40,650,"COMPLETED"],
        [102,1,"Madhapur","Gachibowli",12,18,280,"COMPLETED"],
        [103,1,"Airport","Secunderabad Railway Station",35,50,820,"CANCELLED"],

        [104,2,"Benz Circle","Railway Station",9,15,180,"COMPLETED"],
        [105,2,"Governorpet","Bus Stand",6,10,120,"COMPLETED"],
        [106,2,"Governorpet","Airport",24,32,540,"COMPLETED"],

        [107,3,"RK Beach","MVP Colony",8,12,150,"COMPLETED"],
        [108,3,"Railway Station","Airport",26,40,620,"CANCELLED"],
        [109,3,"MVP Colony","NAD Junction",10,16,220,"COMPLETED"],

        [110,4,"Electronic City","MG Road",22,36,590,"COMPLETED"],
        [111,4,"Whitefield","Airport",30,45,760,"CANCELLED"],

        [112,5,"Shivaji Nagar","Hinjewadi",18,28,430,"COMPLETED"],
        [113,5,"Baner","Kothrud",10,15,210,"COMPLETED"],
        [114,5,"Aundh","Airport",20,30,470,"COMPLETED"],
        [115,5,"Kharadi","Viman Nagar",8,12,180,"COMPLETED"],

        [116,6,"T Nagar","Central Station",16,25,350,"CANCELLED"],
        [117,6,"Velachery","Airport",18,30,420,"CANCELLED"],
        [118,6,"Guindy","OMR",12,18,260,"COMPLETED"]

    ];

    rides.forEach(ride => insertRide.run(ride));
    insertRide.free();

    console.log("Database Initialized Successfully!");
}

// Execute SQL Query
function query(sql) {

    const result = db.exec(sql);

    if (result.length === 0) {
        return {
            columns: [],
            values: []
        };
    }

    return result[0];
}

export { initDB, query };