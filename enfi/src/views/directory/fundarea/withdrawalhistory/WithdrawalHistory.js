
import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap'
import 'src/views/directory/stacking/addfunds/table.scss'
import './loader.css'; // Import your CSS file

const WithdrawalHistory = () => {



  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true); // Step 1: Add loading state
  const FK_MemId = localStorage.getItem('FK_MemId');

  useEffect(() => {
    // Fetch your data from the API
        fetch(`http://localhost:5000/user-api/user-approve-list/${FK_MemId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div>
       {loading ? ( // Step 2: Conditionally render the loader
       <div className="loader">
          <div className="loader-text">Loading...</div>
        </div>
      ) : (
        
      <div className="mt-3">
      <h5 className="text-white mb-3">Withdrawal Request Report</h5>
        <div style={{ overflow: 'auto' }}>
          <table className="custom-table mt-2">
            <thead >
            <tr>
            <th>Sr. No.</th>
              {/* <th>PK_RequestId</th> */}
              <th>MemberName</th>
              {/* <th>Email</th> */}
              {/* <th>WalletAddress</th> */}
              {/* <th>FK_memId</th> */}
              <th>RequestType</th>
              <th>Withdrawal Amount</th>
              <th>RequestStatus</th>
              <th>ApprovedDate</th>
              {/* <th>EnfiQty</th> */}
              {/* <th>BNBQty</th> */}
            </tr>
          </thead>
          <tbody>
          {userData.map((user, index) => (
              <tr key={user.FK_MemId}>
                <td>{index + 1}</td>
                {/* <td>{user.PK_RequestId}</td> */}
                <td>{user.MemberName}</td>
                {/* <td>{user.LoginId}</td> */}
                {/* <td>{user.WalletAddress}</td> */}
                {/* <td>{user.FK_memId}</td> */}
                <td>{user.RequestType}</td>
                <td>{user.RequestQty}</td>
                <td>{user.RequestStatus}</td>
                <td>{user.ApprovedDate}</td>
                {/* <td>{user.EnfiQty}</td> */}
                {/* <td>{user.BNBQty}</td> */}
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>
      )}
    </div>
  )
}

export default WithdrawalHistory
