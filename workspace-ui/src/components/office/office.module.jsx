import React, { Component } from "react";

import styles from "./office.module.css"

class Office extends Component {

  state = { 
    layoutImage: "https://onestopepc.co.uk/wp-content/uploads/2016/08/Example-Floor-Plan-Sketch-1-1024x670.png" 
  }

  constructor(props) {
    super(props)
    
  }

  setLayoutImage = (imageUrl) => {
    this.setState({ layoutImage: imageUrl });
  }

  importLayout = () => {
    return {
      backgroundImage: `url("${this.state.layoutImage}")`
    }
  }

  render() {
    return (
      <div id={styles.officeContainer} style={this.importLayout()}></div>
    );
  }
};

export default Office;

