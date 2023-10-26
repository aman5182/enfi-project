// controllers/adminController.js
const { dbConfig } = require('../config/settings'); // Update the path to your settings file
const sql = require('mssql');


// Fetch all requests for the admin
exports.getUserApproveRequests = async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);

    // Call the EnfiRequest stored procedure
    const result = await pool
      .request()
      .execute('EnfiRequest');

    sql.close();

    // Extract the requests from the result
    const requests = result.recordset;

    console.log('Number of records retrieved:', requests.length); // Log the number of records retrieved
    console.log('Sample data:', requests[0]); // Log the first record (for debugging)

    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching requests:', error);
    res.status(500).json({ message: 'Error fetching requests' });
  } finally {
    sql.close();
  }
};


