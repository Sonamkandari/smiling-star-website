import mysql from "mysql2/promise";

// Create a connection pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "WEARE11",
  database: "smiling_star_db",
  waitForConnections: true,
  connectionLimit: 10,
});

export default db;