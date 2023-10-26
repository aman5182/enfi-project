import React from 'react'

const BalanceCard = () => {
  return (
    <div
      className="col-12 col-lg-5 d-flex flex-column bg-danger justify-content-center align-items-center "
      style={{
        padding: '1.5rem',
        borderRadius: '8px',
        backgroundImage: 'linear-gradient(45deg, #331959, #543279, #3c215e, #311855, #2d164f)',
      }}
    >
      <div className="center text-white text-center">
        <p className="mb-0 fs-5">Wallet Balance</p>
        <h3 className="" style={{ color: '#FBD426' }}>
          200.00 <span className="fw-normal fs-6 ">enfi</span>
        </h3>
      </div>
      <div className="d-flex w-100 justify-content-between mt-3 text-white">
        <div className="left ">
          <p className="mb-0 fs-5">Total Credit</p>
          <h3 className="" style={{ color: '#FBD426' }}>
            20.00 <span className="fw-normal fs-6 ">enfi</span>
          </h3>
        </div>
        <div className="right">
          <p className="mb-0 fs-5">Total Debit</p>
          <h3 className="" style={{ color: '#FBD426' }}>
            0.00 <span className="fw-normal fs-6 ">enfi</span>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default BalanceCard
