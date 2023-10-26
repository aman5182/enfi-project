import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'src/scss/_custom.scss';
import { CCol, CRow, CContainer } from '@coreui/react';
import axios from 'axios';
import ClipboardJS from 'clipboard';
import { useDispatch, useSelector } from 'react-redux';
import {setUserData} from 'src/redux/action/userActions'


const ClickCopy = () => {
  const [referralLink, setReferralLink] = useState(''); // Initialize referralLink state
// console.log(referralLink)
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData)

  useEffect(() => {
    // Get the MemberId from local storage
    const MemberId = localStorage.getItem('FK_MemId');

    if (MemberId) {
      // Make an API request to fetch the referral link
      axios
        .get(`http://localhost:5000/user-api/get-referral-link/${MemberId}`)
        .then((response) => {
          const specificData = response.data[0]; // Extract the specific data object
          // console.log(specificData); // Log the specific data
          setReferralLink(specificData.ReferralLink); // Set the ReferralLink in the state variable
          // console.log(specificData); // Log the specific data
          dispatch(setUserData(specificData));
          // console.log(specificData); // Log the specific data
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  useEffect(() => {
    // Initialize the clipboard instance on the "copy" button
    const clipboard = new ClipboardJS('.copy-button');

    // Define a success event handler for copying
    clipboard.on('success', function (e) {
      e.clearSelection(); // Clear the selection

      // Show a success message
      alert('URL copied to clipboard');
    });

    // Clean up the clipboard instance when the component is unmounted
    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <CContainer fluid className="">
      <CRow className="d-flex justify-content-between ">
        <CCol sm={12} lg={6} className="box position-relative">
          <span
            style={{
              letterSpacing: '0.2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            My Referral Link
          </span>
          <a href="#" className="referal-link">
            {referralLink}
          </a>
          <span className="position-absolute end-0 top-0 p-1">
            <button
              className="mx-2 copy-button"
              data-clipboard-text={referralLink} 
              data-clipboard-action="copy"
              style={{
                background: '#512f76', // Background color
                color: '#fff', // Text color
                border: 'none', // Remove border
                padding: '5px 10px', // Padding
                borderRadius: '5px', // Rounded corners
                cursor: 'pointer', // Show hand cursor on hover
                fontWeight: 'bold',
              }}
            >
              Copy
            </button>
          </span>
        </CCol>
        <CCol sm={12} lg={6} className="box position-relative">
          <span
            style={{
              letterSpacing: '0.2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            ENFI Token Contract
          </span>
          <a href="#" className="referal-link">
            0x7565498C629a443833DC6904D11bD0788E60479a
          </a>
          <span className="position-absolute end-0 top-0 p-1">
            <button
              className="mx-2 copy-button"
              data-clipboard-text="0x7565498C629a443833DC6904D11bD0788E60479a" 
              data-clipboard-action="copy"
              style={{
                background: '#512f76', // Background color
                color: '#fff', // Text color
                border: 'none', // Remove border
                padding: '5px 10px', // Padding
                borderRadius: '5px', // Rounded corners
                cursor: 'pointer', // Show hand cursor on hover
                fontWeight: 'bold',
              }}
            >
              Copy
            </button>
          </span>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default ClickCopy;
