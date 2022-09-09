import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import Landing from './views/common/landing/Landing';

const loading = (
  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const ClientLayout = React.lazy(() => import('./layout/UserLayout'))

// Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'))
// const Register = React.lazy(() => import('./views/pages/register/Register'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

function App() {
  return (
    <BrowserRouter>

      <Suspense fallback={loading}>
        <Routes>
          {/* <Route path="/home" element={<Home/>}/> */}
          {/* <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
          <Route path="/admin/*" name="Home" element={<DefaultLayout />} />
          <Route path="/user/*" name="ClientLayout" element={<ClientLayout />} />
          <Route path="/landing" name="Landing" element={<Landing />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
