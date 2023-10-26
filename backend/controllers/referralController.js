// contrProfileollers/referralController.js
const { dbConfig } = require('../config/settings');
const sql = require('mssql');

const pool = new sql.ConnectionPool(dbConfig);
const poolConnect = pool.connect();



exports.getMemberData = async (req, res) => {
  try {
    const FK_MemId = req.params.FK_MemId;

    // Connect to the database
    await sql.connect(dbConfig);

    // Create a request object
    const request = new sql.Request();

    // Add input parameters for the stored procedure
    request.input('FK_MemId', sql.Int, FK_MemId);

    // Execute the stored procedure
    const result = await request.execute('GetMemberName');

    // Access the result set
    const data = result.recordset;

    // Process the retrieved data (for example, send it as a JSON response)
    res.json(data);

  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'An error occurred' });
  } finally {
    // Close the SQL Server connection
    sql.close();
  }
};

exports.getReferralLink = async (req, res) => {
  try {
    const MemberId = req.params.MemberId;

    // Connect to the database
    await sql.connect(dbConfig);

    // Create a request object
    const request = new sql.Request();

    // Add input parameters for the stored procedure
    request.input('MemberId', sql.Int, MemberId);
    request.input('RequestType', sql.VarChar(50), 'Profile');

    // Execute the stored procedure
    const result = await request.execute('AssociateDashboard');

    // Access the result set
    const data = result.recordset;

    // Process the retrieved data (for example, send it as a JSON response)
    res.json(data);

  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'An error occurred' });
  } finally {
    // Close the SQL Server connection
    sql.close();
  }
};