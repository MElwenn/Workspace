import React, { Component } from "react";
import Office from "../office/office.module";

import styles from "./editor.module.css"

class Editor extends Component {

  state = {
    imageUrl: "",
    imageUrlInputValue: ""
  }

  handleInput = event => {
    this.setState({ imageUrlInputValue: event.target.value });
  };

  updateImage = () => {
    // this.setState(Object.create(this.state, {imageUrl: this.state.imageUrlInputValue}))
    this.setState({ imageUrl: this.state.imageUrlInputValue });
  }

  render() {
    return (
      <div id="editor">

        <div id={styles.uploadForm}>
          <h4>Please insert image url to import</h4>
          <input id="image-url-input" type="text" size="50" onChange={this.handleInput} />
          <br />
          <button onClick={this.updateImage}>OK</button>
        </div>
        <Office layoutImage={this.state.imageUrl} />
      </div>
    );
  }
};

export default Editor;

