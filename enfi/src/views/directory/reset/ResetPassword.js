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




const ResetPasswordForm = () => {

  const [NewPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [LoginId, setLoginId] = useState(''); // Initialize with an empty string

  useEffect(() => {
    // Get the loginId from local storage and set it in the state
    const storedLoginId = localStorage.getItem('LoginId');
    if (storedLoginId) {
      setLoginId(storedLoginId);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (NewPassword !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
    if (NewPassword.length < 5) {
      alert('Password must be at least 5 characters long.');
      return;
    }
    // Create an object with the data to send to the server
    const resetData = {
      NewPassword,
      LoginId,
    };

    // Make an HTTP POST request to the server
    try {
      const response = await fetch('http://localhost:5000/user-api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resetData),
      });

      if (response.ok) {
        // Password reset was successful, handle accordingly
        alert('Password reset successful');
      } else {
        // Password reset failed, handle accordingly
        alert('Password reset failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mt-4">
            <CardBody style={{ backgroundColor: '#eee0fc' }}>
              <h2 className="mb-4">Reset Password</h2>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="NewPass">New Password</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="password"
                    name="New Password"
                    id="NewPass"
                    placeholder="Enter New Password"
                    value={NewPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                     />
                </FormGroup>

                <FormGroup>
                  <Label for="NewPass2">Confirm Password</Label>
                  <Input
                    style={{ backgroundColor: '#5432797b' }}
                    type="password"
                    name="New Password"
                    id="NewPass2"
                    placeholder="Enter New Password"
                    value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                     />
                </FormGroup>
                <div className="text-center mt-4">
                  <Button type='submit'
                    className="px-4 py-2"
                    style={{ backgroundColor: '#543279', color: 'white' }}
                  >
                    Reset
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

export default ResetPasswordForm
