import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import '../scss/_custom.scss'
import { AppHeaderDropdown } from './header/index'



const AppHeader = () => {
  const dispatch = useDispatch()
  // const address = useSelector((state) => state.address.address); // Access the address from Redux
  const address = useSelector(state => state.address);
  // console.log(address)
     const userData = useSelector(state => state.userData);
    //  console.log(userData)
     const sidebarShow = useSelector((state) => state.sidebarShow);

  // const enfiBalance = useSelector(state => state.enfiBalance);
  // const FK_MemId = localStorage.getItem('FK_MemId'); // Retrieve Member ID from local storage
  // const FirstName = localStorage.getItem('FirstName'); // Retrieve LoginId from local storage
  const handleButtonClick = () => {
    // console.log('Button clicked');
    // Dispatch the "set" action to toggle sidebarShow
    dispatch({ type: 'set', sidebarShow: !sidebarShow });
  };
  // #152e4d
  return (
    <CHeader className="" position="sticky" style={{ backgroundColor: '#261245' }}>
      <div className="w-100  d-flex justify-content-between align-items-baseline ">
        <div className="d-flex justify-content-start align-items-baseline">
          <CHeaderToggler
            className="ps-1 "
            onClick={handleButtonClick}
          >
            <CIcon icon={cilMenu} size="lg" style={{ color: ' #a7a7a7' }} />
          </CHeaderToggler>

          <CHeaderNav className="d-md-flex flex-row d-none ms-3">
            <CNavItem>
              {/* <CIcon icon={cilBell} size="lg" /> */}
              <div className="">
                <span className="header-details">NAME :&nbsp;</span>
                <span className="name">{userData.MemberName}</span>
              </div>
            </CNavItem>
            <CNavItem>
              {/* <CIcon icon={cilList} size="lg" /> */}
              <div className="ms-3">
                <span className="header-details">ID :&nbsp;</span>
                <span className="id">{userData.FK_MemId}</span>
              </div>
            </CNavItem>
            <CNavItem>
              {/* <CIcon icon={cilList} size="lg" /> */}
              <div className="ms-3">
                <span className="header-details">Address :&nbsp;</span>
                <span className="id">{address}</span>
              </div>
            </CNavItem>
          </CHeaderNav>
        </div>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </div>
      {/* <CHeaderDivider /> */}
      {/* <CContainer fluid><AppBreadcrumb /></CContainer> */}
    </CHeader>
  )
}

export default AppHeader
