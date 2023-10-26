// controllers/userController.js
const { dbConfig } = require('../config/settings'); // Update the path to your settings file
const sql = require('mssql');
const nodemailer = require('nodemailer');
const emailConfig = require('../config/emailConfig');

// Register a new user
exports.registerUser = async (req, res) => {
  const { FirstName,SponsorCode,EmailId, MobileNo, Password, Country, ActionType,CreatedBy, } = req.body;

  try {
    // Input validation
    if (!FirstName || !SponsorCode || !EmailId || !MobileNo || !Password || !Country || !ActionType || !CreatedBy) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const pool = await sql.connect(dbConfig);

    // Call the stored procedure
    const result = await pool
      .request()
      .input('FirstName', sql.VarChar, FirstName)
      .input('SponsorCode', sql.VarChar, SponsorCode)
      .input('EmailId', sql.VarChar, EmailId)
      .input('MobileNo', sql.VarChar, MobileNo)
      .input('Password', sql.VarChar, Password) // Store the password as plain text
      .input('Country', sql.VarChar, Country)
      .input('ActionType', sql.VarChar, ActionType)
      .input('CreatedBy', sql.VarChar, CreatedBy)
      .execute('AssociateRegistration'); // Replace with your stored procedure name

    if (result.recordset && result.recordset.length > 0) {
      const firstRow = result.recordset[0];
      const msg = firstRow.Msg;

      if (msg === '0') {
        return res.status(400).json({ message: 'Invalid Sponsor Code' });
      }
  
      // Registration was successful
      // Send confirmation email
      const transporter = nodemailer.createTransport(emailConfig);
      const mailOptions = {
        from: emailConfig.auth.user,
        to: EmailId,
        subject: 'Registration Confirmation',
        text: 'You have successfully registered.',
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending confirmation email:', error);
        } else {
          console.log('Confirmation email sent:', info.response);
        }
      });

      return res.status(201).json({ message: 'Registration successful' });
    } else {
      return res.status(500).json({ message: 'Error registering user' });
    }
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ message: 'Error registering user' });
  } finally {
    sql.close();
  }
};

 
// Login User
exports.loginUser = async (req, res) => {
    const { LoginId, Password } = req.body;
    try {
      const pool = await sql.connect(dbConfig);
  
      // Retrieve user information by LoginId and Password
      const result = await pool
        .request()
        .input('LoginId', sql.VarChar, LoginId)
        .input('Password', sql.VarChar, Password) // Retrieve the password as plain text
        .execute('WebCheckLogin'); // Replace with your stored procedure to get user info by LoginId and Password
  
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

  // Update User Data by LoginId
exports.updateUserByLoginId = async (req, res) => {
  const { LoginId, FirstName, Country, PanNO, MobileNo, EmailId, AdharNo, ActionType } = req.body;
     // Add logging for debugging
  console.log('LoginId:', LoginId);
  console.log('FirstName:', FirstName);
  console.log('Country:', Country);
  console.log('EmailId:', EmailId);
  console.log('MobileNo:', MobileNo);
  console.log('AdharNo:', AdharNo);
  console.log('PanNO:', PanNO);
  console.log('ActionType:', ActionType);
  console.log('ActionType:', ActionType);
  try {
    const pool = await sql.connect(dbConfig);

    // Call the stored procedure
    const result = await pool
      .request()
      .input('LoginId', sql.VarChar, LoginId)
      .input('FirstName', sql.VarChar, FirstName)
      .input('Country', sql.VarChar, Country)
      .input('PanNO', sql.VarChar, PanNO)
      .input('MobileNo', sql.VarChar, MobileNo)
      .input('EmailId', sql.VarChar, EmailId)
      .input('Country', sql.VarChar, Country)
      .input('AdharNo', sql.VarChar, AdharNo)
      .input('ActionType', sql.VarChar, ActionType)
      .execute('AssociateRegistration');

    if (result.recordset && result.recordset.length > 0) {
      const firstRow = result.recordset[0];
      const status = firstRow.Status;
      const msg = firstRow.Msg;

      if (status === 1) {
        // User data was updated successfully
        return res.status(200).json({ message: msg });
      } else {
        // User not found or update failed
        return res.status(404).json({ message: msg });
      }
    } else {
      return res.status(500).json({ message: 'Error updating user' });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ message: 'Error updating user' });
  } finally {
    sql.close();
  }
};



// Logout User
exports.logoutUser = (req, res) => {
  // Destroy the user's session
  req.session.destroy((err) => {
    if (err) {
      console.error('Error logging out:', err);
      res.status(500).json({ message: 'Error logging out' });
    } else {
      res.status(200).json({ message: 'Logout successful' });
    }
  });
};




