// contrProfileollers/referralController.js
const { dbConfig } = require('../config/settings');
const sql = require('mssql');

const pool = new sql.ConnectionPool(dbConfig);
const poolConnect = pool.connect();



exports.getDownlineData = async (req, res) => {
    const { LoginId } = req.params;
  
    try {
      await sql.connect(dbConfig);
      const request = new sql.Request();
      request.input('LoginId', sql.NVarChar, LoginId);
      const result = await request.execute('GetDownlineList');
      res.json(result.recordset);
    } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Error fetching data' });
    } finally {
      sql.close();
    }
  };

exports.getDirectData = async (req, res) => {
    const { LoginId } = req.params;
  
    try {
      await sql.connect(dbConfig);
      const request = new sql.Request();
      request.input('LoginId', sql.NVarChar, LoginId);
      const result = await request.execute('GetDirectList');
      res.json(result.recordset);
    } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Error fetching data' });
    } finally {
      sql.close();
    }
  };