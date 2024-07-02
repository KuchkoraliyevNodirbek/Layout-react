import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      {" "}
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Users</Link>
          </li>

          <li>
            <Link to={"/About"}>About</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contack</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
