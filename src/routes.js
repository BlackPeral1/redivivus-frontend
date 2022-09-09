import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AdminCompanyPayment = React.lazy(() =>
  import('./views/payment-administration/admin-company-payments/AdminCompanyPayments'),
)
const AdminCustomerPayment = React.lazy(() =>
  import('./views/payment-administration/admin-customer-payments/AdminCustomerPayments'),
)

const ViewOnePayment = React.lazy(() => import('./components/veiwonepayment/ViewOnePayment'))
const routes = [
  // { path: '/web', exact: true, name: 'Home' },
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  {
    path: '/admin-customer-payments',
    name: 'AdminCustomerPayment',
    element: AdminCustomerPayment,
  },
  {
    path: '/admin-company-payments',
    name: 'AdminCompanyPayment',
    element: AdminCompanyPayment,
  },
  {
    path: '/admin-customer-payments/viewonepayment/:id',
    name: 'ViewOnePayment',
    element: ViewOnePayment,
  },
]

export default routes
