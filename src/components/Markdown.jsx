import React from "react";
import { withRouter } from "react-router-dom";

function Markdown(props) {
  return (
    <div className="">
      <div className="input_window">
        <h2>Input Window</h2>
        <textarea
          className="textfield"
          name="input"
          cols="40"
          rows="10"
          placeholder="Type in Markdown Language"
          onChange={(e) => {
            props.handleInput(e);
          }}
          value={props.markdown}
        ></textarea>
      </div>
      <div className="flex">
        {!props.markdown ? (
          <button onClick={props.handleGoogleExample} className="btn first">
            Google Business Model
          </button>
        ) : (
          <> </>
        )}
        {!props.markdown ? (
          <button onClick={props.handleUberExample} className="btn first">
            Uber Business Model
          </button>
        ) : (
          <> </>
        )}
        {!props.markdown ? (
          <button onClick={props.handleExample} className="btn first">
            AltCampus Business Model
          </button>
        ) : (
          <> </>
        )}        
      </div>
    </div>
  );
}
export default withRouter(Markdown);
