import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import routes from '../routes'
import {
  AppContent, UserSidebar
} from '../components'

const DefaultLayout = () => {
  const [isActive, setActive] = useState(false);
  const currentLocation = useLocation().pathname

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  // const getBreadcrumbs = (location) => {
  //   const breadcrumbs = []
  //   location.split('/').reduce((prev, curr, index, array) => {
  //     const currentPathname = `${prev}/${curr}`
  //     const routeName = getRouteName(currentPathname, routes)
  //     routeName &&
  //       breadcrumbs.push({
  //         pathname: currentPathname,
  //         name: routeName,
  //         active: index + 1 === array.length ? true : false,
  //       })
  //     return currentPathname
  //   })
  //   return breadcrumbs
  // }

  const breadcrumbs = getRouteName(currentLocation, routes)
  // console.log(breadcrumbs);
  return (
    <>

      {/* <TopBar setActive={setActive} isActive={isActive} /> */}
      <div className="container mt-2">
        <div className="row">
          <p>Home / {breadcrumbs}</p>
        </div>

        <div className="row">
          <div className="d-flex">
            <UserSidebar setActive={setActive} isActive={isActive} />
            <div id="content-wrapper" >
              <AppContent />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
