import React from 'react'
import './table.scss'
const AddFundTable = () => {
  return (
    <div style={{ overflow: 'auto' }}>
      <table className="custom-table mt-2">
        <thead className="table-header">
          <tr>
            <th>Sr. No.</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {/* Add table rows with data here */}
          <tr>
            <td>1</td>
            <td>2023-10-01</td>
            <td>$100</td>
            <td>Approved</td>
            <td>Payment received</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2023-09-28</td>
            <td>$75</td>
            <td>Pending</td>
            <td>Waiting for confirmation</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>{' '}
    </div>
  )
}

export default AddFundTable
