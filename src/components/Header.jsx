import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Header(props) {
  return (
    <div className="flex">
      <Link className="logo" to="/">
        <h3>Generate Lean Canvas</h3>
      </Link>
    </div>
  );
}

export default withRouter(Header);
