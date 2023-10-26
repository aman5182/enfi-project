// controllers/walletController.js
const { dbConfig } = require('../config/settings'); // Update the path to your settings file
const sql = require('mssql');

// Function to store wallet data using the new stored procedure
exports.walletEnfiBnbData = async (req, res) => {
  const {LoginId, WalletAddress, ENFITokenBal, BNBTokenBal, ActionType } = req.body;
// console.log(req)
  try {
  

    const pool = await sql.connect(dbConfig);

    // Call the new stored procedure (StoreWalletData)
    const result = await pool
      .request()
      .input('LoginId', sql.VarChar, LoginId)
      .input('WalletAddress', sql.VarChar, WalletAddress)
      .input('ENFITokenBal', sql.VarChar, ENFITokenBal)
      .input('BNBTokenBal', sql.VarChar, BNBTokenBal)
      .input('ActionType', sql.VarChar, ActionType)
      .execute('AssociateRegistration'); // Replace with your new stored procedure name
    //   console.log(result)
    if (result.recordset && result.recordset.length > 0) {
        // console.log(result)
      // Handle success
      return res.status(201).json({ message: 'Wallet data stored successfully' });
     
    } else {
      // Handle failure
      return res.status(500).json({ message: 'Error storing wallet data' });
    }
  } catch (error) {
    console.error('Error storing wallet data:', error);
    return res.status(500).json({ message: 'Error storing wallet data' });
  } finally {
    sql.close();
  }
};
