import React from 'react'
import BalanceCard from './BalanceCard'
import AddFundCard from './AddFundCard'
import AddFundTable from './AddFundTable'
AddFundTable
const AddFund = () => {
  return (
    <div>
      <div className="d-flex gap-2 flex-lg-row flex-column">
        <BalanceCard></BalanceCard>
        <AddFundCard></AddFundCard>
      </div>
      <AddFundTable></AddFundTable>
    </div>
  )
}

export default AddFund
