const { dbConfig } = require('../config/settings'); // Update the path to your settings file
const sql = require('mssql');
const nodemailer = require('nodemailer');
const emailConfig = require('../config/emailConfig');
const crypto = require('crypto');
const bcrypt = require('bcrypt');



// Store OTPs temporarily (e.g., in-memory, Redis, or database)
const otpStore = new Map();

//forgot password
exports.forgotPassword = async (req, res) => {
  const { EmailId } = req.body;

  try {
    const pool = await sql.connect(dbConfig);

    // Generate a new random OTP
    const otp = crypto.randomInt(100000, 999999).toString();

    // Store the OTP temporarily with the user's email
    otpStore.set(EmailId, otp);

    // Send the OTP to the user's email
    const transporter = nodemailer.createTransport(emailConfig);
    const mailOptions = {
      from: emailConfig.auth.user,
      to: EmailId,
      subject: 'Password Reset OTP',
      text: `Your OTP for password reset is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending OTP email:', error);
        res.status(500).json({ message: 'Error sending OTP email' });
      } else {
        console.log('OTP email sent:', info.response);
        res.status(200).json({ message: 'OTP sent successfully' });
      }
    });
  } catch (error) {
    console.error('Error generating OTP:', error);
    res.status(500).json({ message: 'Error generating OTP' });
  } finally {
    sql.close();
  }
};

// veryfyOTP
exports.verifyOTP = (req, res) => {
    const { EmailId, OTP } = req.body;
  
    // Retrieve the stored OTP for the user's email
    const storedOTP = otpStore.get(EmailId);
  
    if (!storedOTP || storedOTP !== OTP) {
      // OTP does not match
      return res.status(400).json({ message: 'Invalid OTP' });
    }
  
    // OTP matches, allow the user to reset the password
    otpStore.delete(EmailId); // Remove the OTP from storage
  
    // You can send a success response or redirect to a password reset page
    res.status(200).json({ message: 'OTP verified successfully' });
  };

  // reset new password
exports.resetPassword = async (req, res) => {
    const { LoginId, NewPassword } = req.body;
  console.log(req.body)
    try {
      const pool = await sql.connect(dbConfig);
  
      // Hash the NewPassword before storing it in the database
      // const saltRounds = 10;
      // const hashedNewPassword = await bcrypt.hash(NewPassword, saltRounds);
  
      // Call the stored procedure to reset the password
      const result = await pool.request()
        .input('LoginId', sql.NVarChar, LoginId)
        .input('NewPassword', sql.NVarChar,NewPassword)
        .execute('ChangePassword'); // Replace with your actual stored procedure name
  
      // Check the result of the stored procedure or handle any errors
  
      res.status(200).json({ message: 'NewPassword reset successful' });
    } catch (error) {
      console.error('Error resetting NewPassword:', error);
      res.status(500).json({ message: 'Error resetting NewPassword' });
    } finally {
      sql.close();
    }
  };  


