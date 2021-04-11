import React, { Component } from "react";
import { Stage, Layer, Rect, Text } from 'react-konva';
import { v4 as uuidv4 } from 'uuid';

import styles from "./office.module.css"
import BackendService from "../backend/backend.module";

class Office extends Component {

  state = {
    layoutImage: "https://onestopepc.co.uk/wp-content/uploads/2016/08/Example-Floor-Plan-Sketch-1-1024x670.png",
    desks: {}
  }

  backend = new BackendService()

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.setState({
      desks: this.backend.load()
    })
  }

  setLayoutImage = (imageUrl) => {
    this.setState({ layoutImage: imageUrl });
  }

  importLayout = () => {
    return {
      backgroundImage: `url("${this.state.layoutImage}")`
    }
  }

  spawnDesk = () => {
    console.log("Adding desk / office")
    let desk = this.newDesk();
    let tempDesks = this.state.desks;
    tempDesks[desk.id] = desk;

    this.backend.save(tempDesks)
    this.setState({
      desks: tempDesks
    })
  }

  // TODO calc height & width from window info
  officeHeight = () => {
    // console.debug("height: " + document.getElementById(styles.officeContainer).height)
    // return document.getElementById(styles.officeContainer).height
    return 1000
  }

  officeWidth = () => {
    // console.debug("width: " + document.getElementById(styles.officeContainer).width)
    // return document.getElementById(styles.officeContainer).width
    // return 1000
    return window.innerWidth
  }

  newDesk = () => {
    return {
      id: uuidv4(),
      x: this.officeWidth() - 150,
      y: 100
    }
  }

  saveDeskPosition = (deskId, e) => {
    let currentDesk = this.state.desks[deskId]
    currentDesk.x = e.target.attrs.x
    currentDesk.y = e.target.attrs.y

    let currentDesks = this.state.desks
    currentDesks[deskId] = currentDesk
    this.setState({ desks: currentDesks })

    this.backend.saveDesk(currentDesk)
  }

  render() {
    return (
      <div id={styles.officeContainer} style={this.importLayout()}>
        <Stage height={this.officeHeight()} width={this.officeWidth()}>
          <Layer>
            {
              Object.values(this.state.desks).map((desk, i) => (
                <Rect
                  onDragEnd={(e) => this.saveDeskPosition(desk.id, e)}
                  key={i}
                  x={desk.x}
                  y={desk.y}
                  width={100}
                  height={50}
                  fill='grey'
                  draggable={!!this.props.isEditingEnabled}
                  stroke='black'
                  strokeWidth={4}
                  cornerRadius={4}
                />
              ))
            }
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default Office;
