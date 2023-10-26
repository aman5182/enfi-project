import React from 'react'
import BalanceCard from '../addfunds/BalanceCard'
import AccountActivation from './AccountActivation'
const staking = () => {
  return (
    <div className="d-flex gap-2 flex-lg-row flex-column justify-content-center">
      <BalanceCard></BalanceCard>
      <AccountActivation></AccountActivation>
    </div>
  )
}

export default staking
