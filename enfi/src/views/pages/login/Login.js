//Login.js
import React, { useState ,useEffect} from 'react';
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
import loginService from './loginService';





function Login () {
  
  const [credentials, setCredentials] = useState({
    LoginId: '',
    Password: '',
  });

  const navigate = useNavigate(); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  useEffect(() => {
    const isLoginIdValid = () => {
      const expirationTime = localStorage.getItem('LoginIdExpiration');
      if (expirationTime) {
        const currentTime = new Date().getTime();
        if (currentTime >= expirationTime) {
          localStorage.removeItem('LoginId');
          localStorage.removeItem('LoginIdExpiration');
          localStorage.removeItem('FK_MemId');
          localStorage.removeItem('FirstName');
        }
      }
    };

    isLoginIdValid();

    const intervalId = setInterval(() => {
      isLoginIdValid();
      const expirationTime = localStorage.getItem('LoginIdExpiration');
      if (expirationTime) {
        const currentTime = new Date().getTime();
        if (currentTime >= expirationTime) {
          localStorage.clear();
        }
      }
    }, 60000);
    // Set a timeout to clear all data in local storage after 30 minutes (30 * 60 * 1000 milliseconds)
    const clearLocalStorageTimeout = setTimeout(() => {
      localStorage.clear();
    }, 30 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(clearLocalStorageTimeout);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response = await loginService.loginUser(credentials);
   
         // Assuming response contains LoginId and FK_MemId  
    const { LoginId, FK_MemId, FirstName } = response.userData;

    
    // Calculate the expiration time (1 minute in milliseconds)
    const expirationTime = new Date().getTime() + 60000;

    // Store LoginId and FK_MemId in local storage
    localStorage.setItem('LoginId', LoginId);
    localStorage.setItem('LoginIdExpiration', expirationTime)
    localStorage.setItem('FK_MemId', FK_MemId);
    localStorage.setItem('FirstName', FirstName);

      // setAuthenticated(true); // Set authenticated to true
      navigate('/dashboard'); // Redirect to the home page

    // Set authenticated to true
    } catch (error) {
      // Handle login failure, e.g., show an error message
      console.error('Login failed:', error.message);
    }
  };




  return (
    <div
    className=" min-vh-100 d-flex flex-row py-5 align-items-center"
    style={{ backgroundImage: `url(${signinBG})`, backgroundSize: 'cover' }}>
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md={8}>
          <CCardGroup className="d-flex flex-column-reverse flex-md-row">
            <CCard className="p-4">
              <CCardBody>
                <CForm  onSubmit={handleSubmit}>
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">Sign In to your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Enter You Email" autoComplete="username" 
                        type="email"
                        id="LoginId"
                        name="LoginId"
                        value={credentials.LoginId}
                        onChange={handleChange}
                         required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      id="password"
                      name="Password"
                      value={credentials.Password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol xs={6}>
                      {/* <Link to="/dashboard"> */}
                        <CButton
                          type="submit"
                          style={{
                            backgroundColor: ' #12263f',
                          }}
                          className="px-4"
                        >
                          Login
                        </CButton>
                      {/* </Link> */}
                    </CCol>
                    <CCol xs={6} className="text-right">
                    <Link to="/forgot">
                     ForgotPassword
                    </Link>

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
                  <h2>Sign up</h2>
                  <br />
                  <p style={{ color: '#dbdbdb' }}>Not Signed in yet ! </p>

                  <p style={{ color: '#dbdbdb' }}>Register yourself to join us</p>
                  <Link to="/register">
                    <CButton color="primary" className="mt-3" active tabIndex={-1}>
                      Register Now!
                    </CButton>
                  </Link>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
  )
}

export default Login
