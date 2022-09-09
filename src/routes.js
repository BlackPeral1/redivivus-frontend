import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AdminCompanyPayment = React.lazy(() =>
  import('./views/payment-administration/admin-company-payments/AdminCompanyPayments'),
)
const AdminCustomerPayment = React.lazy(() =>
  import('./views/payment-administration/admin-customer-payments/AdminCustomerPayments'),
)
const AdminCompany = React.lazy(() =>
  import('./views/Company-Administration/addCompany/AddCompany'),
)

const routes = [
  // { path: '/web', exact: true, name: 'Home' },
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
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
  {
    path: '/dashboard/admin-company',
    name: 'AdminCompany',
    element: AdminCompany,
  },
]

export default routes
