import React from 'react'
import 'src/views/directory/stacking/addfunds/table.scss'

const inbox = () => {
  return (
    <div>
      <h5 className="text-white">Recieved Message Details</h5>
      <div style={{ overflow: 'auto' }}>
        <table className="custom-table mt-2">
          <thead className="table-header">
            <tr>
              <th>Sr. No.</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Recieved Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows with data here */}
            <tr>
              <td>1</td>
              <td>2023-10-01</td>
              <td>Approved</td>
              <td>Payment received</td>
            </tr>
            <tr>
              <td>2</td>
              <td>tenetur. Tenetur,</td>
              <td>Pending</td>
              <td>Waiting for confirmation</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>{' '}
      </div>
    </div>
  )
}

export default inbox
