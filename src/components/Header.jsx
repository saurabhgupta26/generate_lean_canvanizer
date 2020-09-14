import React from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Header(props) {
  return (
    <div className="flex">
      <Link className="logo" to="/">
        <h3>Generate Lean Canvas</h3>
      </Link>
      <ul className="nav_bar">
        <div className="flex">
          <NavLink
            to="/markdown"
            activeClassName="active_nav_btn"
            classname="nav_btn"
          >
            Input
          </NavLink>
          <NavLink
            to="/output"
            activeClassName="active_nav_btn"
            classname="nav_btn"
          >
            Output
          </NavLink>
        </div>
      </ul>
    </div>
  );
}

export default withRouter(Header);
