import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import enfilogo from '../assets/brand/enfilogo.png'
import enfilogoCrop from '../assets/brand/enfilogoCrop.png'
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className=""
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
      style={{
        background: 'linear-gradient(45deg, #331959, #543279, #3c215e, #311855, #2d164f)',
      }}
    >
      <CSidebarBrand className="d-md-flex justify-content-start px-3" to="/">
        <img className="sidebar-brand-full " src={enfilogo} height={50} />
        <img className="sidebar-brand-narrow" src={enfilogoCrop} height={40} />
        {/* <img src={enfilogo} height={40} alt="" /> */}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
