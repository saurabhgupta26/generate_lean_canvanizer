import React from "react";
import { withRouter } from "react-router-dom";

function Markdown(props) {
  return (
    <div className="flex">
      <div className="input_window">
        <h2>Input Window</h2>
        <textarea
          className="textfield"
          name="input"
          cols="60"
          rows="10"
          placeholder="Type in Markdown Language"
          onChange={(e) => {
            props.handleInput(e);
          }}
          value={props.markdown}
        ></textarea>
      </div>
      <div>
        {!props.markdown ? (
          <button onClick={props.handleExample} className="btn first">
            EXAMPLE
          </button>
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
}
export default withRouter(Markdown);
