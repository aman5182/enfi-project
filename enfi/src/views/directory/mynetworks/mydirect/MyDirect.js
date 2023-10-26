import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap'
import 'src/views/directory/stacking/addfunds/table.scss'
import './loader.css'; // Import your CSS file




const MyDirect = () => {
 
  const [userData, setUserData] = useState([]);
  const LoginId = localStorage.getItem('LoginId'); // Get the email ID from local storage
  const [loading, setLoading] = useState(true); // Step 1: Add loading state
 
  useEffect(() => {
    // Fetch your data from the API
        fetch(`http://localhost:5000/user-api/get-direct-list/${LoginId}`)
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
      <div className="d-flex flex-column flex-lg-row align-items-lg-center align-item-start justify-content-lg-between  my-2">
        <h5 className="text-white my-2">My Direct Report</h5>
        {/* <div className="d-flex flex-column flex-lg-row gap-2  text-white  align-items-lg-center align-items-start">
          <label htmlFor="ambId">Search By Ambassador ID :</label>
          <input
            type="text"
            name="ambId"
            id="ambId"
            className="p-2 bg-transparent "
            style={{
              outline: 'none',
              border: 'none',
              borderBottom: '3px solid #543279',
              color: 'white',
            }}
          />
          <Button className="px-4 py-2" style={{ backgroundColor: '#543279', color: 'white' }}>
            Search
          </Button>
        </div> */}
      </div>
      {loading ? ( // Step 2: Conditionally render the loader
       <div className="loader">
          <div className="loader-text">Loading...</div>
        </div>
      ) : (
      <div style={{ overflow: 'auto' }}>
        <table className="custom-table mt-2">
          <thead >
            <tr>
            <th>Sr. No.</th>
              <th>Member ID</th>
              <th>Name</th>
              {/* <th>Email</th> */}
              <th>Sponsor ID</th>
              <th>Sponsor Name</th>
              <th>Joining Date</th>
              <th>Mobile No.</th>
              <th>Status</th>
              <th>Activation Date</th>
              <th>Package Name</th>
            </tr>
          </thead>
          <tbody>
          {userData.map((user, index) => (
              <tr key={user.FK_MemId}>
                <td>{index + 1}</td>
                <td>{user.LoginId}</td>
                <td>{user.DisplayName}</td>
                {/* <td>{user.LoginId}</td> */}
                <td>{user.SponsorId}</td>
                <td>{user.SponsorName}</td>
                <td>{user.JoiningDate}</td>
                <td>{user.MobileNo}</td>
                <td>{user.Status}</td>
                <td>{user.ActivationDate || 'N/A'}</td>
                <td>{user.PackageName || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
  )
}

export default MyDirect
