// controllers/walletController.js
const { dbConfig } = require('../config/settings'); 
const sql = require('mssql');


exports.stackingEnfi = async (req, res) => {
  const {FK_MemId, RequestQty, ActionType } = req.body;
// console.log(req)
  try {
  
    const pool = await sql.connect(dbConfig);
    
    const result = await pool
      .request()
      .input('FK_MemId', sql.VarChar, FK_MemId)
      .input('RequestQty', sql.VarChar, RequestQty)
      .input('ActionType', sql.VarChar, ActionType)
      .execute('EnfiRequest'); 
    //   console.log(result)
    if (result.recordset && result.recordset.length > 0) {
      const firstRow = result.recordset[0];
      const msg = firstRow.Msg;
        console.log(result)
      // Handle success
      return res.status(201).json({ message: 'withdrawal Request successfully' });
     
    } else {
      // Handle failure
      return res.status(500).json({ message: 'Error withdrawal Request' });
    }
  } catch (error) {
    console.error('Error by wallet data:', error);
    return res.status(500).json({ message: 'Error withdrawal Request' });
  } finally {
    sql.close();
  }
};
