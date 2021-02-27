import React, { Component } from "react";

import styles from "./office.module.css"

class Office extends Component {

  constructor(props) {
    super(props)
    // TODO pass this value properly and trigger re-render of component
    this.state = { layoutImage: props.layoutImage };
  }

  importLayout = () => {
    return {
      fontWeight: "bold",
      color: "blue",
      backgroundImage: `url("${this.state.layoutImage}")`
    }
  }

  render() {
    return (
      <div style={this.importLayout()}>THE OFFICE</div>
    );
  }
};

export default Office;

