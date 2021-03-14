import React, { Component } from "react";
import Office from "../office/office.module";

import styles from "./editor.module.css"

class Editor extends Component {

  state = {
    imageUrlInputValue: ""
  }

  constructor(props) {
    super(props);
    this.officeComponent = React.createRef();
  }

  handleInput = event => {
    this.setState({ imageUrlInputValue: event.target.value });
  };

  updateImage = () => {
    this.officeComponent.current.setLayoutImage(this.state.imageUrlInputValue)
  }

  render() {
    return (
      <div id={styles.editorContainer}>

        <div id={styles.uploadForm}>
          <h4>Please insert image url to import</h4>
          <input id="image-url-input" type="text" size="50" onChange={this.handleInput} />
          <br />
          <button onClick={this.updateImage}>OK</button>
        </div>
        <Office ref={this.officeComponent} />
      </div>
    );
  }
};

export default Editor;

