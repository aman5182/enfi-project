//App.js
import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss';
import AuthGuard from './AuthGuard'; // Import the AuthGuard component.

// admin Panel
import AdminLogin from './admin/AdminLogin';
import AdminConnectWallet from './admin/AdminConnectWallet';
import BuyRequests from './admin/BuyRequests';
import LogOut from './views/pages/logOut/LogOut';
// import Approve from './components/admin/Approve';




const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))



// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const ForgotPassword = React.lazy(() => import('./views/pages/forgotPassword/ForgotPassword'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/forgot" name="ForgotPassword Page" element={<ForgotPassword />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route exact path="/user-logout" name="logout page" element={<LogOut/>} />
           {/* Use the AuthGuard to protect all other routes */}
           <Route path="*" element={<AuthGuard> <DefaultLayout /> </AuthGuard>} />


         {/* Admin Panel */}
         <Route path="/admin-login-page" element={<AdminLogin />} />
         <Route path="/admin-connect-wallet" element={<AdminConnectWallet />} />
         <Route path="/admin-all-requests" element={<BuyRequests />} />
         {/* <Route path="/approve-requests" element={<Approve />} /> */}


          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
