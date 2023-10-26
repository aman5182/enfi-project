// controllers/walletController.js
const { dbConfig } = require('../config/settings'); 
const sql = require('mssql');


exports.buyEnfiBalance = async (req, res) => {
  const {FK_MemId, RequestQty,FK_PackageId, PackageName, PackageQty ,ActionType } = req.body;
// console.log(req)
  try {
  
    const pool = await sql.connect(dbConfig);
    
    const result = await pool
      .request()
      .input('FK_MemId', sql.VarChar, FK_MemId)
      .input('RequestQty', sql.VarChar, RequestQty)
      .input('FK_PackageId', sql.VarChar, FK_PackageId)
      .input('PackageName', sql.VarChar, PackageName)
      .input('PackageQty', sql.VarChar, PackageQty)
      .input('ActionType', sql.VarChar, ActionType)
      .execute('EnfiRequest'); 
    //   console.log(result)
    if (result.recordset && result.recordset.length > 0) {
      const firstRow = result.recordset[0];
      const msg = firstRow.Msg;
        // console.log(result)
      // Handle success
      return res.status(201).json({ message: 'enfi token buy successfully' });
     
    } else {
      // Handle failure
      return res.status(500).json({ message: 'Error buy enfi token' });
    }
  } catch (error) {
    console.error('Error by wallet data:', error);
    return res.status(500).json({ message: 'Error buy enfi token' });
  } finally {
    sql.close();
  }
};
const pool = new sql.ConnectionPool(dbConfig);
const poolConnect = pool.connect();

exports.getPackageQty = async (req, res) => {
  try {
    // Wait for the connection pool to be established
    await poolConnect;

    // Execute the "EnfiRequest" stored procedure
    const result = await pool.request().execute('GetPackage');

    // Send the user data as a JSON response
    const returnValue = 'Your return value'; // Replace with your desired return value
    res.json({ data: result.recordset, returnValue }); // Include the return value in the JSON response

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getEnfiPrice = async (req, res) => {
  try {
    // Wait for the connection pool to be established
    await poolConnect;

    // Execute the "EnfiRequest" stored procedure
    const result = await pool.request().execute('GetEnfiPrice');

    // Send the user data as a JSON response
    const returnValue = 'Your return value'; // Replace with your desired return value
    res.json({ data: result.recordset, returnValue }); // Include the return value in the JSON response

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};