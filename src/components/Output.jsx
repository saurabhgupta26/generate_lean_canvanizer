import React from "react";
import { withRouter } from "react-router-dom";
import { AiFillLock, AiFillTag } from "react-icons/ai";
import { FaKey, FaGift, FaDollarSign } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { IoMdColorWand } from "react-icons/io";
import { ImEnlarge, ImUser } from "react-icons/im";
import {VscCircleFilled, VscCircleOutline} from "react-icons/vsc";

function Output(props) {
  return (
    <>
      <div className="container">
        <div className="grid inner_container">
          <div className="problem_section">
            <AiFillLock />
            <h3> PROBLEM</h3>
            <section>
              {props.updatedJson && props.updatedJson["Lean Canvas"].Problem
                ? props.updatedJson["Lean Canvas"].Problem.raw
                    .trim()
                    .split("\n")
                    .map((elem) => <h2 key={elem}> <VscCircleFilled /> {elem} </h2>)
                : "N/A"}
              <p>2</p>
              <h4> Existing Alternatives </h4>
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
                    .trim()
                    .split("\n")
                    .map((elem) => <h2 key={elem}> <VscCircleOutline /> {elem} </h2>)
                : "N/A"}
            </section>
          </div>

          <div className="solution_section">
            <FaKey />
            <h3>SOLUTION</h3>
            <section>
              {props.updatedJson && props.updatedJson["Lean Canvas"].Solution
                ? props.updatedJson["Lean Canvas"].Solution.raw
                    .trim()
                    .split("\n")
                    .map((elem) => <h2 key={elem}> <VscCircleFilled /> {elem} </h2>)
                : "N/A"}
              <p>4</p>
            </section>
          </div>

          <div className="keyMetrics_section">
            <FiBarChart2 />
            <h3>KEY METRICS</h3>
            <section>
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"]["Key Metrics"]
                ? props.updatedJson["Lean Canvas"]["Key Metrics"].raw
                    .trim()
                    .split("\n")
                    .map((elem) => <h2 key={elem}> <VscCircleFilled /> {elem} </h2>)
                : "N/A"}
              <p>7</p>
            </section>
          </div>

          <div className="uvp_section">
            <FaGift />
            <h3>UNIQUE VALUE PROPOSITION</h3>
            <section>
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"]["Unique Value Proposition"]
                ? props.updatedJson["Lean Canvas"][
                    "Unique Value Proposition"
                  ].raw
                    .trim()
                    .split("\n")
                    .map((elem) => <h2 key={elem}> <VscCircleFilled /> {elem} </h2>)
                : "N/A"}
              <p>5</p>
              <h4> HIGH-LEVEL CONCEPTS </h4>

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
                    .trim()
                    .split("\n")
                    .map((elem) => <h2 key={elem}> <VscCircleOutline /> {elem} </h2>)
                : "N/A"}
            </section>
          </div>

          <div className="unfairAdv_section">
            <IoMdColorWand />
            <h3>UNFAIR ADVANTAGE</h3>
            <section>
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"]["Unfair Advantage"]
                ? props.updatedJson["Lean Canvas"]["Unfair Advantage"].raw
                    .trim()
                    .split("\n")
                    .map((elem) => <h2 key={elem}> <VscCircleFilled /> {elem} </h2>)
                : "N/A"}
              <p>9</p>
            </section>
          </div>

          <div className="custSeg_section">
            <ImUser />
            <h3>CUSTOMER SEGMENTS</h3>
            <section>
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"]["Customer Segments"]
                ? props.updatedJson["Lean Canvas"]["Customer Segments"].raw
                    .trim()
                    .split("\n")
                    .map((elem) => <h2 key={elem}> <VscCircleFilled /> {elem} </h2>)
                : "N/A"}
              <p>1</p>
              <h4> EARLY ADOPTERS </h4>

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
                    .trim()
                    .split("\n")
                    .map((elem) => <h2 key={elem}> <VscCircleOutline /> {elem} </h2>)
                : "N/A"}
            </section>
          </div>

          <div className="channels_section">
            <ImEnlarge />
            <h3>CHANNELS</h3>
            <section>
              {props.updatedJson && props.updatedJson["Lean Canvas"].Channels
                ? props.updatedJson["Lean Canvas"].Channels.raw
                    .trim()
                    .split("\n")
                    .map((elem) => <h2 key={elem}> <VscCircleFilled /> {elem} </h2>)
                : "N/A"}
              <p>6</p>
            </section>
          </div>
        </div>

        <div className="grid grid_last inner_container">
          <div className="cost_section">
            <AiFillTag />
            <h3>COST STRUCTURE</h3>
            <section>
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"]["Cost Structure"]
                ? props.updatedJson["Lean Canvas"]["Cost Structure"].raw
                    .trim()
                    .split("\n")
                    .map((elem) => <h2 key={elem}> <VscCircleFilled /> {elem} </h2>)
                : "N/A"}
              <p>8</p>
            </section>
          </div>

          <div className="revenueStreams_section">
            <FaDollarSign />
            <h3>REVENUE STREAMS</h3>
            <section>
              {props.updatedJson &&
              props.updatedJson["Lean Canvas"]["Revenue Streams"]
                ? props.updatedJson["Lean Canvas"]["Revenue Streams"].raw
                    .trim()
                    .split("\n")
                    .map((elem) => <h2 key={elem}> <VscCircleFilled /> {elem} </h2>)
                : "N/A"}
              <p>3</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Output);
