// Request MySQL library
const mysql = require('mysql');

// Database connection variables
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mahasiswa' // Assuming 'dabase_beasiswa' is your database name
});

// Export the database connection variable for use in other modules
module.exports = db;
