import React, { useState, useEffect } from 'react'; // Add this import
import axios from 'axios'; // Add this import
import registerService from './registerService';
import { Link, useNavigate ,useLocation} from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CCardGroup,
  CRow,
} from '@coreui/react'
import regBG from 'src/assets/brand/5068893.jpg'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilPhone, cilSend, cilBuilding } from '@coreui/icons'
import reglogo from 'src/assets/brand/reglogo.png'


function Register() {

  const location = useLocation();
  const { search } = location;
  const urlParams = new URLSearchParams(search);
  const SponsorCode = urlParams.get('Id');


  const [userData, setUserData] = useState({
    SponsorCode: SponsorCode,
    // SponsorName: '',
    FirstName: '',
    EmailId: '',
    MobileNo: '',
    Password: '',
    Country: '',
    ActionType: 'I',
    CreatedBy: '101',
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
 
  
  useEffect(() => {
    // Fetch sponsor's name based on the sponsor code (FK_MemId)
    if (SponsorCode) {
      // Make an API request to get the sponsor's name
      axios.get(`http://localhost:5000/user-api/get-member-data/${SponsorCode}`)
        .then(response => {
    // Update the state with the retrieved sponsor's name
       setUserData({ ...userData, SponsorName: response.data[0].DisplayName });
        setLoading(false); // Set loading to false when data is fetched
        })
        .catch(error => {
          console.error('Error fetching sponsor name:', error);
          setLoading (false); // Set loading to false in case of an error
        });
    }
  }, [SponsorCode]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerService.registerUser(userData);
      // navigate('/login'); // Redirect to the home page
      // Handle successful registration, e.g., show a success message or redirect to the login page
      console.log('Registration successful');
    } catch (error) {
      // Handle registration failure, e.g., show an error message
      console.error('Registration failed:', error.message);
    }
  };


  return (
    <div
    className="bg-light min-vh-100 py-2 d-flex flex-row align-items-center"
    style={{ backgroundImage: `url(${regBG})`, backgroundSize: 'cover' }}
  >
    <CContainer className="">
      <CRow className="  justify-content-center">
        <CCol sm={11} md={10} lg={8} xl={8} className="">
          <CCardGroup className=" d-flex flex-column flex-md-row h-100">
            {/* card1 */}
            <CCard
              className=" "
              style={{
                background: 'linear-gradient(45deg, #331959, #543279, #3c215e, #311855, #2d164f)',
              }}
            >
              <CCardBody className="  d-flex flex-column justify-content-center align-items-center text-center">
                {' '}
                <img src={reglogo} style={{ width: '10rem' }} alt="" />
                <div>
                  <h2 className="text-white mt-2">Sign Up Now !!</h2>
                  <br />
                  <p className="mb-1" style={{ color: '#dbdbdb' }}>
                    Not Signed in yet !{' '}
                  </p>

                  <p className="mb-5" style={{ color: '#dbdbdb' }}>
                    Register yourself to join us
                  </p>
                  <p className="mb-0" style={{ color: '#dbdbdb' }}>
                    Already Have An Account !
                  </p>
                  <Link to="/">
                    <CButton color="warning" className="mt-3 px-5 " active tabIndex={-1}>
                      login
                    </CButton>
                  </Link>
                </div>
              </CCardBody>
            </CCard>
            {/* card2 */}
            <CCard className="col-lg-6 col-md-6 col-12">
              <CCardBody className=" py-2">
                <CForm onSubmit={handleSubmit} >
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Sponser ID" autoComplete="Sponser ID"
                     readOnly // Make it read-only
                      value={userData.SponsorCode}
                     />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Sponser Name" autoComplete="Sponser Name"
                      readOnly // Make it read-only
                      value={userData.SponsorName}
                     />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="User Name" autoComplete="User Name" 
                     type="text"
                   id="FirstName"
                   name="FirstName"
                   value={userData.FirstName}
                   onChange={handleChange}
                   required
                     />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilSend}></CIcon>
                    </CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="Email"
                     type="email"
                    id="EmailId"
                    name="EmailId"
                   value={userData.EmailId}
                   onChange={handleChange}
                    required
                     />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilBuilding}></CIcon>
                    </CInputGroupText>
                    <CFormInput placeholder="Country" autoComplete="Country" 
                       type="text"
          id="Country"
          name="Country"
          value={userData.Country}
          onChange={handleChange}
          required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilPhone}></CIcon>
                    </CInputGroupText>
                    <CFormInput placeholder="Mobile" autoComplete="Mobile"
                      type="number"
          id="MobileNo"
          name="MobileNo"
          value={userData.MobileNo}
          onChange={handleChange}
          required
                     />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
          id="Password"
          name="Password"
          value={userData.Password}
          onChange={handleChange}
          required />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    {/* <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText> 
                       <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    /> */}
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" style={{ backgroundColor: '#543279' }}>Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
  )
}

export default Register
