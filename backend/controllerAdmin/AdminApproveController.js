// controllers/walletController.js
const { dbConfig } = require('../config/settings'); 
const sql = require('mssql');


exports.adminApproveRequest = async (req, res) => {
  const {PK_RequestId, RequestStatus, ActionType } = req.body;
// console.log(req)
  try {
  
    const pool = await sql.connect(dbConfig);
    
    const result = await pool
      .request()
      .input('PK_RequestId', sql.VarChar, PK_RequestId)
      .input('RequestStatus', sql.VarChar, RequestStatus)
      .input('ActionType', sql.VarChar, ActionType)
      .execute('EnfiRequest'); 
    //   console.log(result)
    if (result.recordset && result.recordset.length > 0) {
      const firstRow = result.recordset[0];
      const msg = firstRow.Msg;
        // console.log(result)
      // Handle success
      return res.status(201).json({ message: 'Approve successfully' });
     
    } else {
      // Handle failure
      return res.status(500).json({ message: 'Error Approve' });
    }
  } catch (error) {
    console.error('Error by wallet data:', error);
    return res.status(500).json({ message: 'Error Approve' });
  } finally {
    sql.close();
  }
};
