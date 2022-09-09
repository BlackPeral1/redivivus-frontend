import { NavLink } from "react-router-dom";
import "./sidebar.scoped.css";

export default function SideBar(props) {
  return (
    <nav className={(props.isActive ? 'active ' : '') + 'sidebar'}>

      <ul className="list-unstyled components font-color">
        <li className="text-center font-weight-bold">
          <h3>Redivivus</h3>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'font-color side-link selected' : 'font-color side-link '
            }
          >
            <i className="fa fa-cubes" aria-hidden="true"></i>
            Dashboard
          </NavLink>
        </li>
        <li>
          <a
            href="#customer"
            className="font-color dropdown-toggle side-link"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i className="fas fa-glasses"></i>
            Customers
          </a>
          <ul className="collapse list-unstyled font-color" id="customer">
            <li>
              <NavLink
                to="./new-customer"
                className={({ isActive }) =>
                  isActive ? 'font-color side-link selected' : 'font-color side-link '
                }
              >
                <i className="fa fa-users" aria-hidden="true"></i>
                New Customer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="./all-customer"
                className={({ isActive }) =>
                  isActive ? 'font-color side-link selected' : 'font-color side-link '
                }
              >
                <i className="fas fa-dot-circle"></i>
                All Customers
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/company"
            className={({ isActive }) =>
              isActive ? 'font-color side-link selected' : 'font-color side-link '
            }
          >
            <i className="fa fa-cubes" aria-hidden="true"></i>
            Company
          </NavLink>
        </li>
        <li>
          <a
            href="#payments"
            className="font-color dropdown-toggle side-link"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <i className="fas fa-glasses"></i>
            Payments
          </a>
          <ul className="collapse list-unstyled font-color" id="payments">
            <li>
              <NavLink
                to="/dashboard/admin-customer-payments"
                className={({ isActive }) =>
                  isActive ? 'font-color side-link selected' : 'font-color side-link '
                }
              >
                <i className="fa fa-users" aria-hidden="true"></i>
                Customer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/admin-company-payments"
                className={({ isActive }) =>
                  isActive ? 'font-color side-link selected' : 'font-color side-link '
                }
              >
                <i className="fas fa-dot-circle"></i>
                Company
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
