import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// directory files
const BuyEnfi = React.lazy(() => import('./views/directory/buyenfi/Buyenfi'))
const Update = React.lazy(() => import('./views/directory/updateProfile/Update'))
const ResetPassword = React.lazy(() => import('./views/directory/reset/ResetPassword'))
const Study = React.lazy(() => import('./views/directory/study/Study'))
// stacking
const AddFund = React.lazy(() => import('./views/directory/stacking/addfunds/AddFund'))
const Staking = React.lazy(() => import('./views/directory/stacking/stake/staking'))
const StakingHistory = React.lazy(() =>
  import('./views/directory/stacking/stakinghistory/StakingHistory'),
)
// ?my networks
const MyDirect = React.lazy(() => import('./views/directory/mynetworks/mydirect/MyDirect'))
const LevelTeam = React.lazy(() => import('./views/directory/mynetworks/levelteam/LevelTeam'))

// income report

const DirectReferalReward = React.lazy(() =>
  import('./views/directory/incomereport/directRefRewatrd/DirectReferalReward'),
)
const TeamBuildingReward = React.lazy(() =>
  import('./views/directory/incomereport/teambuildingreward/TeamBuildingReward'),
)
const CommunityReward = React.lazy(() =>
  import('./views/directory/incomereport/communityreward/CommunityReward'),
)

// fund area

const TransferHistory = React.lazy(() =>
  import('./views/directory/fundarea/TransferHistory/TransferHistory'),
)
const WithdrawalRequest = React.lazy(() =>
  import('./views/directory/fundarea/withdrawalrequest/WithdrawalRequest'),
)
const WithdrawalHistory = React.lazy(() =>
  import('./views/directory/fundarea/withdrawalhistory/WithdrawalHistory'),
)
// support
const GeneralSupport = React.lazy(() => import('./views/directory/support/general/GeneralSupport'))
const inbox = React.lazy(() => import('./views/directory/support/inbox/inbox'))
const Outbox = React.lazy(() => import('./views/directory/support/outbox/Outbox'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/directory/buyenfi', name: 'BuyEnfi', element: BuyEnfi, exact: true },
  { path: '/directory/updateProfile', name: 'Update', element: Update },
  { path: '/directory/reset', name: 'ResetPassword', element: ResetPassword },
  { path: '/directory/study', name: 'Study', element: Study },
  { path: '/directory/stacking/addfunds', name: 'AddFund', element: AddFund },
  { path: '/directory/stacking/stake', name: 'Staking', element: Staking },
  {
    path: '/directory/stacking/stakinghistory',
    name: 'StakingHistory',
    element: StakingHistory,
  },
  {
    path: '/directory/mynetworks/mydirect',
    name: 'MyDirect',
    element: MyDirect,
  },
  {
    path: '/directory/mynetworks/levelteam',
    name: 'LevelTeam',
    element: LevelTeam,
  },
  {
    path: '/directory/incomereport/directRefReward',
    name: 'DirectReferalReward',
    element: DirectReferalReward,
  },
  {
    path: '/directory/incomereport/teambuildingreward',
    name: 'TeamBuildingReward',
    element: TeamBuildingReward,
  },
  {
    path: '/directory/incomereport/communityreward',
    name: 'CommunityReward',
    element: CommunityReward,
  },
  {
    path: '/directory/fundarea/TransferHistory',
    name: 'TransferHistory',
    element: TransferHistory,
  },
  {
    path: '/directory/fundarea/withdrawalrequest',
    name: 'WithdrawalRequest',
    element: WithdrawalRequest,
  },
  {
    path: '/directory/fundarea/withdrawalhistory',
    name: 'WithdrawalHistory',
    element: WithdrawalHistory,
  },
  {
    path: '/directory/support/general',
    name: 'GeneralSupport',
    element: GeneralSupport,
  },
  {
    path: '/directory/support/inbox',
    name: 'inbox',
    element: inbox,
  },
  {
    path: '/directory/support/outbox',
    name: 'Outbox',
    element: Outbox,
  },
]

export default routes
