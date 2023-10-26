import React from 'react'
import { Button } from 'reactstrap'
import 'src/views/directory/stacking/addfunds/table.scss'

const CommunityReward = () => {
  return (
    <div style={{ overflow: 'auto' }}>
      <h5 className="text-white mb-3">Community Reward Report</h5>
      <table className="custom-table mt-2">
        <thead className="table-header">
          <tr>
            <th>Sr. No.</th>
            <th>Rank</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Add table rows with data here */}
          <tr>
            <td>1</td>
            <td>Approved</td>
            <td>Payment received</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pending</td>
            <td>Waiting for confirmation</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>{' '}
    </div>
  )
}

export default CommunityReward
