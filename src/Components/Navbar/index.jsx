import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to='/signup'
          >
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar