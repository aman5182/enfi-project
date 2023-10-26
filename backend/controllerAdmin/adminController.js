// controllers/adminController.js
const { dbConfig } = require('../config/settings'); // Update the path to your settings file
const sql = require('mssql');


 
// Login User
exports.adminLogin = async (req, res) => {
    const { LoginId, Password } = req.body;
    try {
      const pool = await sql.connect(dbConfig);
  
      // Retrieve user information by LoginId and Password
      const result = await pool
        .request()
        .input('LoginId', sql.VarChar, LoginId)
        .input('Password', sql.VarChar, Password) // Retrieve the Password as plain text
        .execute('CheckLogin'); // Replace with your stored procedure to get user info by LoginId and Password
  
      sql.close();
  
      if (result.recordset && result.recordset.length > 0) {
            // Extract MemberId from the result
            const memberId = result.recordset[0].MemberId;

        // User with matching LoginId and Password found
        res.status(200).json({ message: 'Login successful', memberId: memberId, userData: result.recordset[0] });
      } else {
        // User not found or Password does not match
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Error during login' });
    } finally {
      sql.close();
    }
  };

// Fetch all requests for the admin
exports.getAllRequests = async (req, res) => {
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


