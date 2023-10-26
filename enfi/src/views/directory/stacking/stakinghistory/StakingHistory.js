import React from 'react'
import 'src/views/directory/stacking/addfunds/table.scss'
const StakingHistory = () => {
  return (
    <div>
      <h5 className="text-white my-2">Top-Up Reports</h5>
      <div style={{ overflow: 'auto' }}>
        <table className="custom-table mt-2">
          <thead className="table-header">
            <tr>
              <th>Sr. No.</th>
              <th>ID</th>
              <th>Package</th>
              <th>Amount Enfi</th>
              <th>Transaction Date</th>
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
        </table>
      </div>
    </div>
  )
}

export default StakingHistory
