import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom'
import signup from 'src/assets/brand/6031991.jpg'
import signinBG from 'src/assets/brand/303.jpg'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'



function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showOTPForm, setShowOTPForm] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const [otp, setOTP] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const navigate = useNavigate();
  
    const handleRequestOTP = async () => {
      try {
        const response = await fetch('http://localhost:5000/user-api/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ EmailId: email }),
        });
  
        if (response.ok) {
          setShowOTPForm(true);
          setMessage('');
        } else {
          const data = await response.json();
          setMessage(data.message);
        }
      } catch (error) {
        console.error('Error requesting OTP:', error);
      }
    };
  
    const handleVerifyOTP = async () => {
      try {
        const response = await fetch('http://localhost:5000/user-api/verify-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ EmailId: email, OTP: otp }),
        });
  
        if (response.ok) {
          setIsPasswordReset(true);
          setMessage('OTP verified successfully. Please enter your new password.');
        } else {
          const data = await response.json();
          setMessage(data.message);
        }
      } catch (error) {
        console.error('Error verifying OTP:', error);
      }
    };
  
    const handlePasswordChange = async () => {
      try {
        const response = await fetch('http://localhost:5000/user-api/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ LoginId: email, NewPassword: newPassword }),
        });
  
        if (response.ok) {
          setMessage('Password reset successful. You can now login with your new password.');
        } else {
          const data = await response.json();
          setMessage(data.message);
        }
      } catch (error) {
        console.error('Error resetting password:', error);
      }
    };
  
    const handleOTPChange = (e) => {
      setOTP(e.target.value);
    };


  return (
    <div
      className=" min-vh-100 d-flex flex-row py-5 align-items-center"
      style={{ backgroundImage: `url(${signinBG})`, backgroundSize: 'cover' }}
    >
      {isPasswordReset ? (
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup className="d-flex flex-column-reverse flex-md-row">
              <CCard className="p-4">
                <CCardBody>
                  <CForm  >
                    <h1>New Password</h1>
                    <p className="text-medium-emphasis">New Passwoed</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Enter Your New Password" autoComplete="username" 
                          type="password"
                          value={newPassword} onChange={(e) => setNewPassword(e.target.value)} 
                           required
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        {/* <Link to="/dashboard"> */}
                          <CButton onClick={handlePasswordChange}
                             style={{ backgroundColor: ' #12263f',}}
                            className="px-4"
                          >
                          Reset Password
                          </CButton>
                        {/* </Link> */}
                      </CCol>
                      <CCol xs={6} className="text-right">
                        
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white py-5 w-100 "
                style={{ backgroundImage: `url(${signup})`, backgroundSize: 'cover', width: '' }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Reset Password</h2>
                    <br />
                    <p style={{ color: '#dbdbdb' }}>Send Otp </p>

                    <p style={{ color: '#dbdbdb' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      ) : !showOTPForm ? (
        <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup className="d-flex flex-column-reverse flex-md-row">
              <CCard className="p-4">
                <CCardBody>
                  <CForm  >
                    <h1>forgotPassword </h1>
                    <p className="text-medium-emphasis">enter emain id</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Enter You Email" autoComplete="username" 
                          type="email"
                          value={email} onChange={handleEmailChange}
                           required
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        {/* <Link to="/dashboard"> */}
                          <CButton
                         onClick={handleRequestOTP}
                            style={{
                              backgroundColor: ' #12263f',
                            }}
                            className="px-4"
                          >
                          Request OTP
                          </CButton>
                        {/* </Link> */}
                      </CCol>
                      <CCol xs={6} className="text-right">
                        
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white py-5 w-100 "
                style={{ backgroundImage: `url(${signup})`, backgroundSize: 'cover', width: '' }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>forgot</h2>
                    <br />
                    <p style={{ color: '#dbdbdb' }}>Send Otp </p>

                    <p style={{ color: '#dbdbdb' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      ) : (
        <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup className="d-flex flex-column-reverse flex-md-row">
              <CCard className="p-4">
                <CCardBody>
                  <CForm  >
                    <h1>Enter OTP</h1>
                    <p className="text-medium-emphasis">Enter OTP</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Enter Your Otp" autoComplete="username" 
                  type="text" value={otp} onChange={handleOTPChange} 
                           required
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        {/* <Link to="/dashboard"> */}
                          <CButton
                           onClick={handleVerifyOTP}
                            style={{
                              backgroundColor: ' #12263f',
                            }}
                            className="px-4"
                          >
                         Verify OTP
                          </CButton>
                        {/* </Link> */}
                      </CCol>
                      <CCol xs={6} className="text-right">
                        
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white py-5 w-100 "
                style={{ backgroundImage: `url(${signup})`, backgroundSize: 'cover', width: '' }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>forgot</h2>
                    <br />
                    <p style={{ color: '#dbdbdb' }}>Send Otp </p>

                    <p style={{ color: '#dbdbdb' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      )}
    </div>
  )
}

export default ForgotPassword
