import React, { useState, useEffect } from 'react';
import { AiFillLock, AiOutlineTrophy } from 'react-icons/ai'
import { BiMoneyWithdraw, BiWallet } from 'react-icons/bi'
import { LiaHandshakeSolid } from 'react-icons/lia'
import { VscCompassActive } from 'react-icons/vsc'
import { CRow, CCol } from '@coreui/react'
import 'src/scss/_custom.scss'
import { ethers } from 'ethers';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchDataForMember } from './apiService';

const WidgetsDropdown = () => {
   
  const dispatch = useDispatch()
  // const address = useSelector((state) => state.address.address); // Access the address from Redux
  const userData = useSelector(state => state.userData);
  // console.log(userData)

 // const enfiBalanceObject = useSelector((state) => state.enfiBalance);
 const enfiBalance = useSelector(state => state.enfiBalance);
 // Extract the BigNumber from the enfiBalanceObject
 // const enfiBalance = enfiBalanceObject.enfiBalance;

 // Debugging: Log the value of enfiBalance
 // console.log("enfiBalance:", enfiBalance);

  // Check if enfiBalance is a BigNumber before formatting it
  const formattedEnfiBalance = ethers.BigNumber.isBigNumber(enfiBalance)
  ? ethers.utils.formatEther(enfiBalance)
  : '0'; // Default value if enfiBalance is not a BigNumber

  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Retrieve MemberId from local storage
  //   const MemberId = localStorage.getItem('FK_MemId');

  //   if (MemberId) {
  //     fetchDataForMember(MemberId)
  //       .then((data) => {
  //         setData(data[0]); // Assuming the API returns an array with a single object
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching data:', error);
  //         setLoading(false);
  //       });
  //   }
  // }, []);

  // if (userData) {
  return (
    <CRow className="">
      <CCol sm={6} lg={3}>
        <div
          className="info p-3 mb-3 hover-class "
          style={{
            borderRadius: '8px',
            minHeight: '22vh',
            color: 'white',
            background: 'linear-gradient(7deg, rgb(157 81 81), rgb(84, 50, 121), rgb(60, 33, 94))',
            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              {userData.JoiningDate  || 'N/A'}
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Joining Date
              </p>
            </div>
            <span className="mx-2">
              <LiaHandshakeSolid size={35} color="#ffcb6b"></LiaHandshakeSolid>
            </span>
          </div>
        </div>
      </CCol>
      <CCol sm={6} lg={3}>
        <div
          className="warning p-3 mb-3 hover-class "
          style={{
            borderRadius: '8px',
            minHeight: '22vh',
            color: 'white',
            background: 'linear-gradient(220deg, #331959, #543279, #3c215e)',
            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              {userData.ActivationDate || 'N/A' }
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Activation Date
              </p>
            </div>
            <span className="mx-2">
              <VscCompassActive size={35} color="#ffcb6b"></VscCompassActive>
            </span>
          </div>
        </div>
      </CCol>
      <CCol sm={6} lg={3}>
        <div
          className="danger p-3 mb-3 hover-class "
          style={{
            borderRadius: '8px',
            minHeight: '22vh',
            color: 'white',
            background: 'linear-gradient(7deg, rgb(157 81 81), rgb(84, 50, 121), rgb(60, 33, 94))',
            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              {userData.LockedEnfi } <span className="fs-6 fw-normal">enfi</span>
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Locked ENFI
              </p>
            </div>
            <span className="mx-2">
              <AiFillLock size={35} color="#ffcb6b"></AiFillLock>
            </span>
          </div>
        </div>
      </CCol>
      <CCol sm={6} lg={3}>
        <div
          className="primary p-3 mb-3 hover-class "
          style={{
            borderRadius: '8px',
            minHeight: '22vh',
            color: 'white',
            background: 'linear-gradient(191deg, #331959, #543279, #3c215e)',
            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              {formattedEnfiBalance} <span className="fs-6 fw-normal">enfi</span>
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Wallet Balanace
              </p>
            </div>
            <span className="mx-2">
              <BiWallet size={35} color="#ffcb6b"></BiWallet>
            </span>
          </div>
        </div>
      </CCol>
    </CRow>
    );
  // } else {
  //   return (
  //     // Handle the case where userData is not available
  //     <div>Loading...</div>
  //   );
  // }
}
export default WidgetsDropdown
