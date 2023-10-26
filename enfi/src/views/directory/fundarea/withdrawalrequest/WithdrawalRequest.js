import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap'
import axios from 'axios';
import 'src/views/directory/stacking/addfunds/table.scss'

const WithdrawalRequest = () => {

  const [amount, setAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [FK_MemId, setFK_MemId] = useState('');

  useEffect(() => {
    const storedFK_MemId = localStorage.getItem('FK_MemId');
    if (storedFK_MemId) {
      setFK_MemId(storedFK_MemId);
    }
  }, []);

  const performTransaction = async () => {
    try {
      const apiEndpoint = 'http://localhost:5000/user-api/withdrawal-enfi-token';
      const requestData = {
        FK_MemId: FK_MemId,
        RequestQty: amount,
        ActionType: 'Withdrawl Request',
      };

      const apiResponse = await axios.post(apiEndpoint, requestData);
      console.log('API Response:', apiResponse.data);
 
      // setSuccessMessage('Data storage successful.');
      setSuccessMessage('');
        // Show a success message using the alert function
        alert('Request successful');
    } catch (error) {
      console.error('Error performing POST request:', error);
      setSuccessMessage(''); // Clear any previous success message
      // setErrorMessage('Error performing POST request. Please try again.');

      // Show an error message using the alert function
      alert('Error performing POST request. Please try again.');
    }
  };

  return (
    <div
      className="col-12  d-flex flex-column bg-danger  align-items-start "
      style={{
        color: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        backgroundImage: 'linear-gradient(45deg, #331959, #543279, #3c215e, #311855, #2d164f)',
      }}
    >
      <h4>withdrawal Request</h4>
      <div className="d-flex w-100 gap-2 mt-2 flex-lg-row flex-column ">
        <div className="w-100 d-flex flex-column ">
          <label htmlFor="">Balance Enfi</label>
          <input type="text" className="rounded-2 p-1 w-75" style={{ outline: 'none' }} />
        </div>
        <div className="w-100 d-flex flex-column">
          <label htmlFor="">USDT According To Enfi</label>
          <input type="text" className="rounded-2 p-1 w-75" style={{ outline: 'none' }} />
        </div>
        <div className="w-100 d-flex flex-column">
          <label htmlFor="">Enter Your Withdrawal Amount </label>
          <input  type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} placeholder='enter amount' className="rounded-2 p-1 w-75" style={{ outline: 'none' }} />
        </div>
      </div>
    
      <div className=" mt-4">
        <Button onClick={performTransaction} className="px-4 py-2" style={{ backgroundColor: '#543279', color: 'white' }}>
          Request
        </Button>  
         {/* {successMessage && <p>{successMessage}</p>} */}
      </div>
    </div>
  )
}

export default WithdrawalRequest
