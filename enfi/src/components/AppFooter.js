import React from 'react'
import { CFooter } from '@coreui/react'
const AppFooter = () => {
  return (
    <CFooter
      style={{
        boxShadow: '0px 0px 7px 4px rgba(255, 255, 255, 0.091)',
        color: 'white',
        backgroundColor: '#261245',
        fontSize: '1rem',
        fontWeight: '500',
      }}
    >
      <div>
        <span className="ms-1">copyright&copy; 2023</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
