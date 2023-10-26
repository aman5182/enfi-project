import React from 'react'
import { Button } from 'reactstrap'
import 'src/views/directory/stacking/addfunds/table.scss'

const TransferHistory = () => {
  return (
    <div>
      <h5 className="text-white mb-3">Full Wallet History</h5>
      <div style={{ overflow: 'auto' }}>
        <table className="custom-table mt-2">
          <thead className="table-header">
            <tr>
              <th>Sr. No.</th>
              <th>Date</th>
              <th>Type</th>
              <th>Amount Enfi</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows with data here */}
            <tr>
              <td>1</td>
              <td>Approved</td>
              <td>Payment received</td>
              <td>Payment received</td>
              <td>Payment received</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Pending</td>
              <td>Pending</td>
              <td>Waiting for confirmation</td>
              <td>Waiting for confirmation</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>{' '}
      </div>{' '}
    </div>
  )
}

export default TransferHistory
