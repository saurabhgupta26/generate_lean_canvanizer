import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { AiFillLock, AiFillTag } from "react-icons/ai";
import { FaKey, FaGift, FaDollarSign } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { IoMdColorWand } from "react-icons/io";
import { ImEnlarge, ImUser } from "react-icons/im";

function Output(props) {
  console.log();
  return (
    <>
      <div className="container">
        <div className="grid inner_container">
          <div className="problem_section">
            <AiFillLock />
            <h3> PROBLEM</h3>
            <h2>
              {props.updatedJson && props.updatedJson["Lean Canvas"].Problem
                ? props.updatedJson["Lean Canvas"].Problem.raw
                : "N/A"}
              <br />
              <p>2</p>
              <h4> Existing Alternatives </h4>
              <br />
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"] &&
              props.updatedJson["Lean Canvas"].Problem &&
              props.updatedJson["Lean Canvas"].Problem[
                "Existing Alternatives"
              ] &&
              props.updatedJson["Lean Canvas"].Problem["Existing Alternatives"]
                .raw
                ? props.updatedJson["Lean Canvas"].Problem[
                    "Existing Alternatives"
                  ].raw
                : "N/A"}
            </h2>
          </div>

          <div className="solution_section">
            <FaKey />
            <h3>SOLUTION</h3>
            <h2>
              {props.updatedJson && props.updatedJson["Lean Canvas"].Solution
                ? props.updatedJson["Lean Canvas"].Solution.raw
                : "N/A"}
              <br />
              <p>4</p>
              <h4> Existing Alternatives </h4>
              <br />
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"] &&
              props.updatedJson["Lean Canvas"].Solution &&
              props.updatedJson["Lean Canvas"].Solution[
                "Existing Alternatives"
              ] &&
              props.updatedJson["Lean Canvas"].Solution["Existing Alternatives"]
                .raw
                ? props.updatedJson["Lean Canvas"].Solution[
                    "Existing Alternatives"
                  ].raw
                : "N/A"}
            </h2>
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
        <h2>Content from output</h2>
        {/* {props.markdown} ? <Convert>{props.markdown}</Convert> :{" "} */}
        {/* <Marked> ##Hello </Marked> */}
        {/* <Marked> # Hello world!</Marked> */}
        <h1>No data here</h1>
      </div>
    </>
  );
}

export default withRouter(Output);
