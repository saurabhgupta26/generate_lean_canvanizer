import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Markdown from "./Markdown.jsx";
import Output from "./Output.jsx";
import Header from "./Header.jsx";

function Dashboard(props) {
    return (
      <>
        <Header />
        <h1> Generate Lean Canvas </h1>
        <div className="input_window">
          <Markdown
            handleInput={props.handleInput}
            markdown={props.markdown}
            handleExample={props.handleExample}
          />
          <Output output={props.output} />
        </div>
      </>
    );
  }

export default withRouter(Dashboard);
