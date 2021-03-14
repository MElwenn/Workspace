import React, { Component } from "react";

import styles from "./office.module.css"

class Office extends Component {

  state = { 
    layoutImage: "blub" 
  }

  constructor(props) {
    super(props)
    // TODO pass this value properly and trigger re-render of component
    
  }

  setLayoutImage = (imageUrl) => {
    this.setState({ layoutImage: imageUrl });
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

