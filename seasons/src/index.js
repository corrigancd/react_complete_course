import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./seasonDisplay";
import Spinner from "./spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {}

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request ... " />;
  }

  render() {
    return this.renderContent();
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
