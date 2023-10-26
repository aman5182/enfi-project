import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import { TbWorldShare, TbUserShare } from 'react-icons/tb'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { MdGroupOff } from 'react-icons/md'
import 'src/scss/_custom.scss'
import { useSelector, useDispatch } from 'react-redux'
// import { fetchDataForMember } from './apiService';



const WidgetsDropdown2 = () => {

  const dispatch = useDispatch()
  // const address = useSelector((state) => state.address.address); // Access the address from Redux
  const userData = useSelector(state => state.userData);
  // console.log(userData)

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
    <CRow>
      <CCol sm={6} lg={3}>
        <div
          className="info p-3 mb-3 hover-class "
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
            {userData.TotalReferral}
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Total Referal
              </p>
            </div>
            <span className="mx-2">
              <TbWorldShare size={35} color="#ffcb6b"></TbWorldShare>
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
            background: 'linear-gradient(7deg, rgb(157 81 81), rgb(84, 50, 121), rgb(60, 33, 94))',

            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              {userData.ActiveReferral}
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Active Referal
              </p>
            </div>
            <span className="mx-2">
              <TbUserShare size={35} color="#ffcb6b"></TbUserShare>
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
            background: 'linear-gradient(290deg, #331959, #543279, #3c215e)',

            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
           {userData.ActiveTeam }
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Total Active Teams
              </p>
            </div>
            <span className="mx-2">
              <HiOutlineUserGroup size={35} color="#ffcb6b"></HiOutlineUserGroup>
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
            background: 'linear-gradient(7deg, rgb(157 81 81), rgb(84, 50, 121), rgb(60, 33, 94))',

            boxShadow: '2px 3px 7px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="d-flex justify-content-between ">
            <div className="">
              <p className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
               {userData.InActiveTeam }
              </p>
              <p
                className="mb-0"
                style={{ fontSize: '1.1rem', color: '#e2e2e2e2', fontWeight: '400' }}
              >
                Total In-Active Teams
              </p>
            </div>
            <span className="mx-2">
              <MdGroupOff size={35} color="#ffcb6b"></MdGroupOff>
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

export default WidgetsDropdown2
