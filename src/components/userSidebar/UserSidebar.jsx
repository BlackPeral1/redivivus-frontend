import { NavLink } from "react-router-dom";
import "./userSidebar.scoped.css";

export default function UserSideBar(props) {



  return (
    <div>
      <nav className="sidebar">
        <ul className="list-unstyled components font-color">
          <li>
            <NavLink
              to="/user/new-pickup-request"
              className={({ isActive }) =>
                (isActive ? ' selected ' : ' ') + 'font-color fw-normal side-link'
              }
            >
              New Request
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/company"
              className={({ isActive }) =>
                (isActive ? ' selected ' : ' ') + 'font-color fw-normal side-link'
              }
            >
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/my-request"
              className={({ isActive }) =>
                (isActive ? ' selected ' : ' ') + 'font-color fw-normal side-link'
              }
            >
              My Requests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/earnings"
              className={({ isActive }) =>
                (isActive ? ' selected ' : ' ') + 'font-color fw-normal side-link'
              }
            >
              Earnings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/your-details"
              className={({ isActive }) =>
                (isActive ? ' selected ' : ' ') + 'font-color fw-normal side-link'
              }
            >
              Your Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/settings"
              className={({ isActive }) =>
                (isActive ? ' selected ' : ' ') + 'font-color fw-normal side-link'
              }
            >
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/company"
              className={({ isActive }) =>
                (isActive ? ' selected ' : ' ') + 'font-color fw-normal side-link'
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/company"
              className={({ isActive }) =>
                (isActive ? ' selected ' : ' ') + 'font-color fw-normal side-link'
              }
            >
              Requests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/company"
              className={({ isActive }) =>
                (isActive ? ' selected ' : ' ') + 'font-color fw-normal side-link'
              }
            >
              Bins
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/company"
              className={({ isActive }) =>
                (isActive ? ' selected ' : ' ') + 'font-color fw-normal side-link'
              }
            >
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/payment"
              className={({ isActive }) =>
                (isActive ? ' selected ' : ' ') + 'font-color fw-normal side-link'
              }
            >
              Payment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/company"
              className={({ isActive }) =>
                (isActive ? ' selected ' : ' ') + 'font-color fw-normal side-link'
              }
            >
              Account
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
