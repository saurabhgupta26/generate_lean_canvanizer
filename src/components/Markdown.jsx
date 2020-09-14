import React from "react";
import { withRouter } from "react-router-dom";

function Markdown(props) {
  console.log(props.markdown, "props");
  return (
    <>
      <div className="input_window">
        <h2>Input Window</h2>
        <textarea
          className="textfield"
          name="input"
          cols="100"
          rows="20"
          placeholder="Type in Markdown Language"
          onChange={(e) => props.handleInput(e)}
          value={props.markdown}
        ></textarea>
      </div>
      {!props.markdown ? (
        <div className="side_button">
          <button onClick={props.handleExample}>Click for an example</button>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
}
export default withRouter(Markdown);
