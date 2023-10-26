import React, { useState, useEffect } from 'react';
import 'src/views/directory/stacking/addfunds/table.scss'
import { Button } from 'reactstrap'
import styled from 'styled-components'
import './loader.css'; // Import your CSS file


const LevelTeam = () => {
  const CustomSelect = styled.select`
    ${'' /* box-sizing: border-box; */}
    text-align: left;
    padding: 10px;
    ${'' /* background-color: red; */}
    border: none;
    border-bottom: 3px solid #7f4eb5;
    border-radius: 0;
    background-color: transparent;
    color: #fff;
    font-size: 16px;
    min-width: 10vw;
    outline: none;
    cursor: pointer;
    transition: border-bottom 0.3s ease;
    ${'' /* appearance: none; */}
    /* Remove the default dropdown arrow */

    option {
      padding: 10px; /* Add padding to the options */
      background-color: #3c215e;
      color: #fff;
    }
  `
  const [loading, setLoading] = useState(true); // Step 1: Add loading state
  const [userData, setUserData] = useState([]);
  const LoginId = localStorage.getItem('LoginId'); // Get the email ID from local storage

  useEffect(() => {
    // Fetch your data from the API
        fetch(`http://localhost:5000/user-api/get-downline-list/${LoginId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUserData(data);
        // console.log(data)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div>
       
      <div className="d-flex flex-column flex-lg-row align-items-baseline justify-content-lg-between  my-2">
         <h5 className="text-white my-2">My Downline Report</h5>
         
       {/* <div className="d-flex flex-column flex-lg-row gap-2   text-white align-items-start">
          <CustomSelect>
            <option value="option" disabled>
              Select Level
            </option>
            <option value="option1">level 1</option>
            <option value="option2">level 2</option>
            <option value="option3">level 3</option>
            <option value="option4">level 4</option>
            <option value="option5">level 5</option>
            <option value="option6">level 6</option>
            <option value="option7">level 7</option>
            <option value="option8">level 8</option>
            <option value="option9">level 9</option>
            <option value="option10">level 10</option>
            <option value="option11">level 11</option>
            <option value="option12">level 12</option>
            <option value="option13">level 13</option>
            <option value="option14">level 14</option>
            <option value="option15">level 15</option>
          </CustomSelect>
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
              <th>Level</th>
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
                <td>{user.Level}</td>
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

export default LevelTeam
