import React, { Component } from "react";
import Office from "../office/office.module";

import styles from "./editor.module.css"

class Editor extends Component {

  state = {
    imageUrlInputValue: "",
    importModalOpen: false
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

  openImportModal = () => {
    this.setState({ importModalOpen: true })
  }

  closeImportModal = () => {
    this.setState({ importModalOpen: false })
  }

  render() {
    return (
      <div id={styles.editorContainer}>
        <div id={styles.toolboxContainer}>
          <button onClick={this.openImportModal}>Layout importieren</button>
        </div>

        {this.state.importModalOpen && <div id={styles.uploadForm}>
          <h4>Please insert image url to import</h4>
          <input id="image-url-input" type="text" size="50" onChange={this.handleInput} />
          <br />
          <button onClick={this.updateImage}>OK</button>
          <button onClick={this.closeImportModal}>Cancel</button>
        </div>}
        <Office ref={this.officeComponent} />
      </div>
    );
  }
};

export default Editor;

