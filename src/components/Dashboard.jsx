import React from "react";
import { withRouter } from "react-router-dom";
import Markdown from "./Markdown.jsx";
import Output from "./Output.jsx";
import Header from "./Header.jsx";

function Dashboard(props) {
  return (
    <>
      <Header />
      <div className="input_window">
        <Markdown
          handleInput={props.handleInput}
          markdown={props.markdown}
          handleGoogleExample={props.handleGoogleExample}
          handleUberExample={props.handleUberExample}
          handleAltCampus={props.handleAltCampus}
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
