import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const AdminCompanyPayment = React.lazy(() =>
  import('./views/payment-administration/admin-company-payments/AdminCompanyPayments'),
)
const AdminCustomerPayment = React.lazy(() =>
  import('./views/payment-administration/admin-customer-payments/AdminCustomerPayments'),
)

const NewPickupReq = React.lazy(() => import('./views/pickupReq/newPickupReq/NewPickupReq'))
const AllPickupReq = React.lazy(() => import('./views/pickupReq/allReq/AllPickupReq'))
const Payment = React.lazy(() => import('./views/company-payment/payment/Payment'))

const ViewOnePayment = React.lazy(() => import('./components/veiwonepayment/ViewOnePayment'))
const routes = [
  { path: '/', exact: true, name: 'Home' },

  //Company Route
  { path: '/company', name: 'Company', element: Dashboard, permissions: 'isCompany' },
  {
    path: '/payment',
    name: 'Payment',
    element: Payment,
    permissions: 'isCompany',
  },

  //Customer Route
  {
    path: '/new-pickup-request',
    name: 'New Pickup Request',
    element: NewPickupReq,
    permissions: 'isCustomer',
  },
  {
    path: '/my-request',
    name: 'My Pickup Request',
    element: AllPickupReq,
    permissions: 'isCustomer',
  },

  //Admin Route
  { path: '/dashboard', name: 'Dashboard', element: Dashboard, permissions: 'isAdmin' },
  {
    path: '/admin-customer-payments',
    name: 'AdminCustomerPayment',
    element: AdminCustomerPayment,
    permissions: 'isAdmin',
  },
  {
    path: '/admin-company-payments',
    name: 'AdminCustomerPayment',
    element: AdminCompanyPayment,
    permissions: 'isAdmin',
  },

  {
    path: '/admin-customer-payments/viewonepayment/:id',
    name: 'ViewOnePayment',
    element: ViewOnePayment,
    permissions: 'isAdmin',
  },
  {
    path: '/admin-company-payments/viewonepayment/:id',
    name: 'ViewOnePayment',
    element: ViewOnePayment,
    permissions: 'isAdmin',
  },
]

export default routes
