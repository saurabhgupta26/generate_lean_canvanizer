import React from "react";
import { withRouter } from "react-router-dom";
import Markdown from "./Markdown.jsx";
import Output from "./Output.jsx";
import Header from "./Header.jsx";

function Dashboard(props) {
  return (
    <>
      <Header />
      {/* <h1> Generate Lean Canvas </h1> */}
      <div className="input_window">
        <Markdown
          handleInput={props.handleInput}
          markdown={props.markdown}
          handleGoogleExample={props.handleGoogleExample}
          handleUberExample={props.handleUberExample}
        />
        <Output
          // output={props.output}
          markdown={props.markdown}
          updatedJson={props.updatedJson}
        />
      </div>
    </>
  );
}

export default withRouter(Dashboard);
