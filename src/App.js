import React, { Component } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Error from "./components/Error.jsx";
import Dashboard from "./components/Dashboard.jsx";
import md2json from "md-2-json";
import Homepage from "./components/Homepage.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
      json: "",
    };
  }
  handleInput = ({ target: { name, value } }) => {
    console.log("reached in input");
    this.setState({ markdown: value });
    this.setState({ json: md2json.parse("# Lean Canvas\n\n" + value) });
  };
  componentDidMount() {
    const altC = `## Problem
> Platform(App) Development & Enhancement
> Marketing & Customer Acquisition
> Sales promotions to acquire new customers
### Existing Alternatives
> Hiring Drivers
> Customer Support
## Solution
> Drivers, map API providers, Lobbyists, Investors
## Key Metrics
> Network
> Platform
> Skilled Drivers
> Technology Talent
## Unique Value Proposition
> For the Drivers
> Easy to get started
> Opportunity to earn money
> Freedom to choose working hours
### High Level Concept
> For Riders
> Safety and security
> Lowest prices than normal taxi services
> Easier transaction
> Cashless Ride
> Convienent Working
## Unfair Advantage
> Innovation
> High demand and trust
## Channels
> Website
> Mobile Apps 
> Social Media
> Word of Mouth
> Ads
## Customer Segments
> People who don't own cars
> People who can't drive a car
> People who are looking for cost effective factors
### Early Adopters
> People who own a car and looking for extra income
> People who love to drive
> People looking for flexible work environment
## Cost Structure
> Customer Acquisition Cost(CAC) 
> Legal and Settlement Costs
> Insurance Costs
> Research & Developments
## Revenue Streams
> Ride Transaction Fees
> Surge Pricing
> Licensing Fees
> Alternative Streams`;
    this.setState({
      markdown: altC,
    });
  }
  handleClick = () => {};

  handleUberExample = () => {
    const example = `## Problem
> Platform(App) Development & Enhancement
> Marketing & Customer Acquisition
> Sales promotions to acquire new customers
### Existing Alternatives
> Hiring Drivers
> Customer Support
## Solution
> Drivers, map API providers, Lobbyists, Investors
## Key Metrics
> Network
> Platform
> Skilled Drivers
> Technology Talent
## Unique Value Proposition
> For the Drivers
> Easy to get started
> Opportunity to earn money
> Freedom to choose working hours
### High Level Concept
> For Riders
> Safety and security
> Lowest prices than normal taxi services
> Easier transaction
> Cashless Ride
> Convienent Working
## Unfair Advantage
> Innovation
> High demand and trust
## Channels
> Website
> Mobile Apps 
> Social Media
> Word of Mouth
> Ads
## Customer Segments
> People who don't own cars
> People who can't drive a car
> People who are looking for cost effective factors
### Early Adopters
> People who own a car and looking for extra income
> People who love to drive
> People looking for flexible work environment
## Cost Structure
> Customer Acquisition Cost(CAC) 
> Legal and Settlement Costs
> Insurance Costs
> Research & Developments
## Revenue Streams
> Ride Transaction Fees
> Surge Pricing
> Licensing Fees
> Alternative Streams`;
    this.setState({
      markdown: example,
    });
  };
  handleGoogleExample = () => {
    const example = `## Problem
> Irrelevant Search Results
> Hard to find things
### Existing Alternatives
> Altavista
> Yahoo
> Excite
## Solution
> Develop a technology that allows users to find relevant content
## Key Metrics
> Number of Search Requests
> Percentage of users who end their search on first page
## Unique Value Proposition
> Users can truly find what they're looking for
> Fast Search
### High Level Concept
> Fast web search based on relvancy
## Unfair Advantage
> Innovation.
> Google Page Rank Technology
## Channels
> User References
## Customer Segments
> All Web Users
### Early Adopters
> Stanford students
## Cost Structure
> Hosting
> Development
## Revenue Streams
> Investment
> Advertising`;
    this.setState({
      markdown: example,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/dashboard"
            exact
            render={() => (
              <Dashboard
                handleInput={this.handleInput}
                handleGoogleExample={this.handleGoogleExample}
                handleUberExample={this.handleUberExample}
                markdown={this.state.markdown}
                updatedJson={this.state.json}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={() => <Homepage handleClick={this.handleClick} />}
          />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default withRouter(App);
