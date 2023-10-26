import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilPencil,
  cilBank,
  cilMoney,
  cilFork,
  cilSettings,
  cilStorage,
  cilSpeedometer,
  cilAddressBook,
  cilAccountLogout,
  cilTask,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'warning',
      text: 'HOME',
    },
  },

  {
    component: CNavItem,
    name: 'Register',
    to: '/register',

    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: 'My Account',
    to: '/base',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Update Profile',
        to: '/directory/updateProfile',
      },
      {
        component: CNavItem,
        name: 'Reset Password',
        to: '/directory/reset',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Stacking Area',
    to: '/base',
    icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buy Enfi',
        to: '/directory/buyenfi',
      },
      // {
      //   component: CNavItem,
      //   name: 'Stacking',
      //   to: '/directory/stacking/stake',
      // },
      {
        component: CNavItem,
        name: 'Stacking History',
        to: '/directory/stacking/StakingHistory',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'My Networks',
    to: '/base',
    icon: <CIcon icon={cilFork} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'My Direct',
        to: '/directory/mynetworks/mydirect',
      },
      {
        component: CNavItem,
        name: 'Level Team',
        to: '/directory/mynetworks/levelteam',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Income Reports',
    to: '/base',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Direct Referral Reward',
        to: '/directory/incomereport/directRefReward',
      },
      {
        component: CNavItem,
        name: 'Team Building Reward',
        to: '/directory/incomereport/teambuildingreward',
      },
      {
        component: CNavItem,
        name: 'Community Reward',
        to: '/directory/incomereport/communityreward',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Fund Area',
    to: '/base',
    icon: <CIcon icon={cilBank} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Transfer History',
        to: '/directory/fundarea/TransferHistory',
      },
      {
        component: CNavItem,
        name: 'Withdrawal Request',
        to: '/directory/fundarea/withdrawalrequest',
      },
      {
        component: CNavItem,
        name: 'Withdrawal History',
        to: '/directory/fundarea/withdrawalhistory',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Pun Course',
    to: '/base',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'study',
        to: '/directory/study',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Support',
    to: '/base',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'General Support',
        to: '/directory/support/general',
      },
      {
        component: CNavItem,
        name: 'Inbox',
        to: '/directory/support/inbox',
      },
      {
        component: CNavItem,
        name: 'Outbox',
        to: '/directory/support/outbox',
      },
    ],
  },

  {
    component: CNavItem,
    name: 'LogOut',
    to: '/user-logout',

    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  },
]

export default _nav
