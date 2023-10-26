import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  CardBody,
} from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'


const UpDateProfile = () => {

  const dispatch = useDispatch()
  // console.log(address)
     const userData = useSelector(state => state.userData);
     console.log(userData)

  const [formData, setFormData] = useState({
    // sponsorId: '',
    // sponsorName: '',
    FirstName: '',
    Country: '',
    MobileNo: '',
    EmailId: '',
    PanNO: '',
    AdharNo: '',
    walletAddress: '',
    LoginId: '', // Store LoginId
    ActionType: 'U',
  });

  useEffect(() => {
    // Fetch the data from the API endpoint using FK_MemId
    const FK_MemId = localStorage.getItem('FK_MemId');
    fetch(`http://localhost:5000/user-api/get-member-data/${FK_MemId}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log('Fetched Data:', data); // Add this line
        // Assuming the data returned is an object with keys matching the form field names
        if (data.length > 0) {
          const userData = data[0]; // Access the first item in the array
          setFormData({
            // sponsorId: userData.FK_MemId, // Correct the keys to match your form fields
            // sponsorName: userData.LoginId,
            FirstName: userData.DisplayName,
            Country: userData.CountryName,
            MobileNo: userData.MobileNo,
            EmailId: userData.Email,
            PanNO: userData.PanNo,
            AdharNo: userData.AdharNo,
            walletAddress: userData.WalletAddress,
            LoginId: userData.LoginId,
            ActionType: 'u',
          });
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    const updatedData = {
      ...formData,
      ActionType: 'U',
    };
    // Send a PUT request to update the profile
    fetch(`http://localhost:5000/user-api/update-profile/${formData.LoginId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((updatedData) => {
         // Check the value of the 'message' property
      if (updatedData.message === '2') {
        // The update was successful
        console.log('Profile updated:', updatedData);
        window.alert('Your profile updated successfully');
      } else {
        // The update failed
        console.log('Profile update failed:', updatedData);
        window.alert('Failed to update the profile');
      }
    })
      .catch((error) => console.error('Error updating profile:', error));
  };


  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <CardBody style={{ backgroundColor: '#eee0fc' }}>
              <h2 className="mb-4">Sponsor Info</h2>
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="sponsorId">Sponsor ID</Label>
                      <Input
                        style={{ backgroundColor: '#5432797b' }}
                        type="text"
                        name="sponsorId"
                        id="sponsorId"
                        value={userData.SponsorID}
                         readOnly
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="sponsorName">Sponsor Name</Label>
                      <Input
                        style={{ backgroundColor: '#5432797b' }}
                        type="text"
                        name="sponsorName"
                        id="sponsorName"
                        value={userData.SponsorName}
                        readOnly
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
          <Card className="mt-4">
            <CardBody style={{ backgroundColor: '#eee0fc' }}>
              <h2 className="mb-4">Personal Details</h2>
              <Form >
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="FirstName"
                    id="name"
                    value={formData.FirstName}
                        onChange={handleChange}
                    placeholder="Enter Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="country">Country</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="Country"
                    id="country"
                    value={formData.Country}
                        onChange={handleChange}
                    placeholder="Enter Country"
                    required // Add required attribute
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="mobile">Mobile No</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="MobileNo"
                    id="mobile"
                    value={formData.MobileNo}
                        onChange={handleChange}
                    placeholder="Enter Mobile No"
                    required // Add required attribute
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="EmailId">Email</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="email"
                    name="EmailId"
                    id="email"
                    value={formData.EmailId}
                        onChange={handleChange}
                    placeholder="Enter EmailId"
                    required // Add required attribute
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="pan">PAN</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="PanNO"
                    id="pan"
                    value={formData. PanNO}
                        onChange={handleChange}
                    placeholder="Enter PAN"
                    required // Add required attribute
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="adhar">Adhar</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="AdharNo"
                    id="adhar"
                    value={formData.AdharNo}
                        onChange={handleChange}
                    placeholder="Enter Adhar"
                    required // Add required attribute
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="walletAddress">Wallet Address</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="text"
                    name="walletAddress"
                    id="walletAddress"
                    value={formData.walletAddress}
                        onChange={handleChange}
                    readOnly
                  />
                </FormGroup>
                <div className="text-center mt-4">
            <Button type="button"   onClick={handleUpdate}
            className="px-4 py-2" style={{ backgroundColor: '#543279', color: 'white' }}>
              Update Your Details
            </Button>
          </div>
              </Form>
            </CardBody>
          </Card>
    
        </Col>
      </Row>
    </Container>
  )
}

export default UpDateProfile
