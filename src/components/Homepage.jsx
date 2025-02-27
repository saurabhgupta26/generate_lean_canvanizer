import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import { GoArrowSmallRight } from "react-icons/go";

function Homepage(props) {
  return (
    <>
      <Header />
      <div className="display_home">
        <div className="flex">
          <div className="side_panel">
            <h3>Pointers before you start:</h3>
            <ul>
              <li>
                <GoArrowSmallRight /> Start the markdown with double #, i.e. ##
                Problem or ## Key Metrics and ### for the sub menu of the
                business model.
              </li>

              <li>
                <GoArrowSmallRight /> You can copy paste the data or type in, it
                will take the data as you please.
              </li>
              <li>
                <GoArrowSmallRight /> Remove all the text from the text field to
                see the predefined business models.
              </li>
              <li>
                <GoArrowSmallRight /> Feel free to connect for the
                feedback/general query at  <br/> saurabhguptaviet@gmail.com.
              </li>
            </ul>
          </div>
          <Link className="btn first" to="/dashboard">
            Let's Start!
          </Link>
        </div>
        <div class="custom-shape-divider-bottom-1600277376">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
export default Homepage;
