import React from "react";
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
            </h2>
          </div>

          <div className="keyMetrics_section">
            <FiBarChart2 />
            <h3>KEY METRICS</h3>
            <h2>
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"]["Key Metrics"]
                ? props.updatedJson["Lean Canvas"]["Key Metrics"].raw
                : "N/A"}
              <br />
              <p>7</p>
            </h2>
          </div>

          <div className="uvp_section">
            <FaGift />
            <h3>UNIQUE VALUE PROPOSITION</h3>
            <h2>
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"]["Unique Value Proposition"]
                ? props.updatedJson["Lean Canvas"]["Unique Value Proposition"]
                    .raw
                : "N/A"}
              <br />
              <p>5</p>
              <h4> HIGH-LEVEL CONCEPTS </h4>
              <br />
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"] &&
              props.updatedJson["Lean Canvas"]["Unique Value Proposition"] &&
              props.updatedJson["Lean Canvas"]["Unique Value Proposition"][
                "High Level Concept"
              ] &&
              props.updatedJson["Lean Canvas"]["Unique Value Proposition"][
                "High Level Concept"
              ].raw
                ? props.updatedJson["Lean Canvas"]["Unique Value Proposition"][
                    "High Level Concept"
                  ].raw
                : "N/A"}
            </h2>
          </div>

          <div className="unfairAdv_section">
            <IoMdColorWand />
            <h3>UNFAIR ADVANTAGE</h3>
            <h2>
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"]["Unfair Advantage"]
                ? props.updatedJson["Lean Canvas"]["Unfair Advantage"].raw
                : "N/A"}
              <br />
              <p>9</p>
            </h2>
          </div>

          <div className="custSeg_section">
            <ImUser />
            <h3>CUSTOMER SEGMENTS</h3>
            <h2>
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"]["Customer Segments"]
                ? props.updatedJson["Lean Canvas"]["Customer Segments"].raw
                : "N/A"}
              <br />
              <p>1</p>
              <h4> EARLY ADOPTERS </h4>
              <br />
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"] &&
              props.updatedJson["Lean Canvas"]["Customer Segments"] &&
              props.updatedJson["Lean Canvas"]["Customer Segments"][
                "Early Adopters"
              ] &&
              props.updatedJson["Lean Canvas"]["Customer Segments"][
                "Early Adopters"
              ].raw
                ? props.updatedJson["Lean Canvas"]["Customer Segments"][
                    "Early Adopters"
                  ].raw
                : "N/A"}
            </h2>
          </div>

          <div className="channels_section">
            <ImEnlarge />
            <h3>CHANNELS</h3>
            <h2>
              {props.updatedJson && props.updatedJson["Lean Canvas"].Channels
                ? props.updatedJson["Lean Canvas"].Channels.raw
                : "N/A"}
              <br />
              <p>6</p>
            </h2>
          </div>
        </div>

        <div className="grid grid_last inner_container">
          <div className="cost_section">
            <AiFillTag />
            <h3>COST STRUCTURE</h3>
            <h2>
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"]["Cost Structure"]
                ? props.updatedJson["Lean Canvas"]["Cost Structure"].raw
                : "N/A"}
              <br />
              <p>8</p>
            </h2>
          </div>

          <div className="revenueStreams_section">
            <FaDollarSign />
            <h3>REVENUE STREAMS</h3>
            <h2>
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"]["Revenue Streams"]
                ? props.updatedJson["Lean Canvas"]["Revenue Streams"].raw
                : "N/A"}
              <br />
              <p>3</p>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Output);
