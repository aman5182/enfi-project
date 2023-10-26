import React from 'react'
import userImg from 'src/assets/images/PngItem_307416.png'
import { useNavigate,Link } from 'react-router-dom'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilUser,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilAccountLogout,
  cilLockLocked,
  cilSettings,
  cilTask,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const AppHeaderDropdown = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
         // Clear the local storage
   // Remove the specific keys from localStorage
localStorage.removeItem('FK_MemId');
localStorage.removeItem('LoginIdExpiration');
localStorage.removeItem('FirstName');
localStorage.removeItem('LoginId');

      // Send a POST request to your server's logout API
      const response = await fetch('http://localhost:5000/user-api/log-out', {
        method: 'POST',
        credentials: 'include', // Send cookies if using sessions
      });

      if (response.status === 200) {
        // Logout was successful
        console.log('Logout successful');
        // You can also redirect the user to the login page or perform other actions here
           // Redirect to the login page
      navigate('/');
      } else {
        // Handle errors
        const data = await response.json();
        console.error('Error logging out:', data.message);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={userImg} size="sm" />
      </CDropdownToggle>
      <CDropdownMenu
        className="pt-0"
        style={{ backgroundColor: '#e9d4ff', color: 'black', overflow: 'hidden' }}
        placement="bottom-end"
      >
        <CDropdownHeader
          className="text-white fw-semibold py-2"
          style={{ backgroundColor: '#543279' }}
        >
          My Account
        </CDropdownHeader>
        {/* <CDropdownItem> */}
        <Link
          to="/directory/updateProfile"
          style={{ textDecoration: 'none', padding: '0.5rem', color: 'black' }}
        >
          <CIcon icon={cilUser} className="me-2" />
          My Profile
        </Link>
        {/* </CDropdownItem> */}
        {/* <CDropdownItem> */}
        <button  to='/' onClick={handleLogout} style={{ textDecoration: 'none', padding: '0.5rem',backgroundColor:'#e9d4ff', border: 'none' ,color: 'black' }}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Logout
        </button>
        {/* </CDropdownItem> */}
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
