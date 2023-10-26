import React from 'react'
import { Button } from 'reactstrap'
import 'src/views/directory/stacking/addfunds/table.scss'

const TeamBuildingReward = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-lg-row align-items-baseline justify-content-lg-between  my-2">
        <h5 className="text-white my-2">Team Building Reward Details</h5>
        <div className="d-flex flex-column flex-lg-row gap-2   text-white align-items-start">
          <label htmlFor="ambId">
            <input
              placeholder="Enter Ambassador Id"
              type="text"
              name="ambId"
              id="ambId"
              className="p-2 bg-transparent "
              style={{
                outline: 'none',
                border: 'none',
                borderBottom: '3px solid #543279',
                color: 'white',
              }}
            />
          </label>

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
              <th>Referal ID</th>
              <th>Name</th>
              <th>Package</th>
              <th>Amount Enfi</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows with data here */}
            <tr>
              <td>1</td>
              <td>2023-10-01</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>2</td>

              <td>2023-09-28</td>
              <td>$75</td>
              <td>Pending</td>
              <td>Pending</td>
              <td>Waiting for confirmation</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>$75</td>
              <td>Waiting for confirmation</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2023-09-28</td>
              <td>2023-09-28</td>
              <td>$75</td>
              <td>Pending</td>
              <td>Waiting for confirmation</td>
            </tr>

            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <p className="text-center text-white my-2 ">
        Total Reward : <span>0.00</span>
      </p>
    </div>
  )
}

export default TeamBuildingReward
