import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { AiFillLock, AiFillTag } from "react-icons/ai";
import { FaKey, FaGift, FaDollarSign } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { IoMdColorWand } from "react-icons/io";
import { ImEnlarge, ImUser } from "react-icons/im";

function Output(props) {
  return (
    <>
      <div className="container">
        <div className="grid inner_container">
          <div className="problem_section">
            <AiFillLock />
            <h3> PROBLEM</h3>
            <h2>{props.output}</h2>
            <p>2</p>
          </div>
          <div className="solution_section">
            <FaKey />
            <h3>SOLUTION</h3>
            <p>4</p>
          </div>
          <div className="keyMatrics_section">
            <FiBarChart2 />
            <h3>KEY MATRICS</h3>
            <p>7</p>
          </div>
          <div className="uvp_section">
            <FaGift />
            <h3>UNIQUE VALUE PROPOSITION</h3>
            <p>5</p>
          </div>
          <div className="unfairAdv_section">
            <IoMdColorWand />
            <h3>UNFAIR ADVANTAGE</h3>
            <p>9</p>
          </div>
          <div className="custSeg_section">
            <ImUser />
            <h3>CUSTOMER SEGMENTS</h3>
            <p>1</p>
          </div>
          <div className="channels_section">
            <ImEnlarge />
            <h3>CHANNELS</h3>
            <p>6</p>
          </div>
        </div>
        <div className="grid grid_last inner_container">
          <div className="cost_section">
            <AiFillTag />
            <h3>COST STRUCTURE</h3>
            <p>8</p>
          </div>
          <div className="revenueStreams_section">
            <FaDollarSign />
            <h3>REVENUE STREAMS</h3>
            <p>3</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Output);
