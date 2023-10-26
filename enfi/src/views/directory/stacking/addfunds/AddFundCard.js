import React from 'react'
import { Button } from 'reactstrap'

const AddFundCard = () => {
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
      <h4>Add Fund To Wallet</h4>
      <div className="d-flex flex-column w-100">
        <label htmlFor="">Amount (Enfi)</label>
        <input type="text" className="rounded-2 p-1 w-75" style={{ outline: 'none' }} />
      </div>
      <div className=" mt-4">
        <Button className="px-4 py-2" style={{ backgroundColor: '#543279', color: 'white' }}>
          Activate
        </Button>
      </div>{' '}
    </div>
  )
}

export default AddFundCard
