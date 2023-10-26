import React from 'react'
import { Button } from 'reactstrap'
const AccountActivation = () => {
  return (
    <div
      className="col-12 col-lg-5 d-flex flex-column bg-danger  align-items-start "
      style={{
        color: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        backgroundImage: 'linear-gradient(45deg, #331959, #543279, #3c215e, #311855, #2d164f)',
      }}
    >
      <h4 className="">Account Activation Manual</h4>
      <div className="w-100 mt-2">
        <div className="d-flex flex-column">
          <label htmlFor="">Enter Amount Min 100 Enfi</label>
          <input type="text" className="rounded-2 p-1 w-75" style={{ outline: 'none' }} />
        </div>
      </div>
      <div className="w-100 mt-2">
        <div className="d-flex flex-column">
          <label htmlFor="">Enter Activation ID</label>
          <input type="text" className="rounded-2 p-1 w-75" style={{ outline: 'none' }} />
        </div>
      </div>
      <div className=" mt-4">
        <Button className="px-4 py-2" style={{ backgroundColor: '#543279', color: 'white' }}>
          Reset
        </Button>
      </div>{' '}
    </div>
  )
}

export default AccountActivation
