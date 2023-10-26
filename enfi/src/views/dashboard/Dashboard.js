import React from 'react'
import ClickCopy from '../widgets/ClickCopy'
import WidgetsDropdown2 from '../widgets/WidgetsDropdown2'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import Default from '../widgets/Default.js'
import Rewards from '../widgets/Rewards'
import { CContainer } from '@coreui/react'
const Dashboard = () => {
  return (
    <div>
      <Default></Default>
      <ClickCopy></ClickCopy>
      <WidgetsDropdown />
      <WidgetsDropdown2 />
      <Rewards></Rewards>
    </div>
  )
}

export default Dashboard
