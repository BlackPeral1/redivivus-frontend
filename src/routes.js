import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AdminCompanyPayment = React.lazy(() => import('./views/payment-administration/admin-company-payments/AdminCompanyPayments'))
const AdminCustomerPayment = React.lazy(() =>
  import('./views/payment-administration/admin-customer-payments/AdminCustomerPayments'),
)

const routes = [
  // { path: '/web', exact: true, name: 'Home' },
  { path: '/', exact: true, name: 'Home' },
  { path: '/admin/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/user/company', name: 'Company', element: Dashboard },
  {
    path: '/dashboard/admin-customer-payments',
    name: 'AdminCustomerPayment',
    element: AdminCustomerPayment,
  },
  {
    path: '/dashboard/admin-company-payments',
    name: 'AdminCustomerPayment',
    element: AdminCompanyPayment,
  },
]

export default routes
