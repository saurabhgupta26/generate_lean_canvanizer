import React, { Component } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Markdown from "./components/Markdown.jsx";
import Output from "./components/Output.jsx";
import Error from "./components/Error.jsx";
import Dashboard from "./components/Dashboard.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
      output: "",
    };
  }
  handleInput = ({ target: { name, value } }) => {
    console.log("reached in input");
    this.setState({ markdown : value });
  };

  handleExample = () => {
    console.log("Reached");
    const example = `Problem:
    - Irrelevant Search Results
    - Hard to find things
    - Existing Alternatives:
      - Altavista
      - Yahoo
      - Excite
  Solution:
    - Develop a technology that allows users to find relevant content
  Key Metrics:
    - Number of Search Requests
    - Percentage of users who end their search on first page
  Unique Value Proposition:
    - Users can truly find what they're looking for
    - Fast Search
    - High Level Concept:
      - Fast web search based on relvancy
  Unfair Advantage:
    - Innovation.
    - Google Page Rank Technology
  Channels:
    - User References
  Customer Segment:
    - All Web Users
    - Early Adopters:
      - Stanford students
  Cost Structure:
    - Hosting
    - Development
  Revenue Streams:
    - Investment
    - Advertising`;
    this.setState({
      markdown: example,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Dashboard
                handleInput={this.handleInput}
                handleExample={this.handleExample}
                markdown={this.state.markdown}
                output={this.state.output}
              />
            )}
          />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default withRouter(App);
