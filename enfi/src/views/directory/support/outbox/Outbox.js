import React from 'react'
import { Button } from 'reactstrap'
import 'src/views/directory/stacking/addfunds/table.scss'
const Outbox = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-lg-row align-items-lg-center align-item-start justify-content-lg-between  my-2">
        <h5 className="text-white my-2">Sent Message Details</h5>
        <div className="d-flex flex-column flex-lg-row gap-2 text-white align-items-lg-center align-items-start">
          <label htmlFor="ambId"> Ticket ID :</label>
          <input
            type="text"
            name="tktId"
            id="tktId"
            className="p-2 bg-transparent "
            style={{
              outline: 'none',
              border: 'none',
              borderBottom: '3px solid #543279',
              color: 'white',
            }}
          />
          <Button className="px-4 py-2" style={{ backgroundColor: '#543279', color: 'white' }}>
            Search
          </Button>
        </div>
      </div>
      <div style={{ overflow: 'auto' }}>
        <table className="custom-table mt-2">
          <thead className="table-header">
            <tr>
              <th>Sr. No.</th>
              <th>Ticket ID</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Sent Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows with data here */}
            <tr>
              <td>1</td>
              <td>2023-10-01</td>
              <td>$100</td>

              <td>Payment received</td>
              <td>Payment received</td>
            </tr>
            <tr>
              <td>2</td>

              <td>2023-09-28</td>
              <td>$75</td>
              <td>Pending</td>
              <td>Waiting for confirmation</td>
            </tr>
            <tr>
              <td>2</td>

              <td>2023-09-28</td>
              <td>$75</td>
              <td>Pending</td>
              <td>Waiting for confirmation</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>

              <td>Pending</td>
              <td>Waiting for confirmation</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>

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

export default Outbox
