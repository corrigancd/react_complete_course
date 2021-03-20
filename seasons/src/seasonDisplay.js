import "./seasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: `Grand stretch in the evenin'`,
    iconName: "sun",
  },
  winter: {
    text: `Jaysus, it's fresh out there this mornin'`,
    iconName: "snowflake",
  },
};

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
}

class SeasonDisplay extends React.Component {
  state = {
    lat: this.props.lat,
    season: getSeason(this.props.lat, new Date().getMonth()),
  };

  render() {
    return (
      <div className={`season-display ${this.state.season}`}>
        <i
          className={`massive icon-left ${
            seasonConfig[this.state.season].iconName
          } icon`}
        />
        <h1 className>{`${seasonConfig[this.state.season].text}`}</h1>
        <i
          className={`massive icon-right ${
            seasonConfig[this.state.season].iconName
          } icon`}
        />
      </div>
    );
  }
}

export default SeasonDisplay;
