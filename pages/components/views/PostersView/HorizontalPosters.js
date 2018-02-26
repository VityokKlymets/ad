import React, { Component } from "react";
import { canUseDOM } from "../../utils/Util";
import HGUI from "./PostersGui/HGUI";
class HorizontalPosters extends Component {
  displayName = "HorizontalPosters";
  state = {
    currentPoster: this.props.rec.currentColumn - 1,
    postersCount: this.props.children.length,
    row: this.props.rec.row,
    column: this.props.rec.column
  };
  canUseDOM = canUseDOM();
  canInteractive = () => {
    const { currentRow, row } = this.props.rec;
    return currentRow === row;
  };
  onKeyDown = e => {
    if (!this.canInteractive()) return;
    const keyCode = e.keyCode;
    switch (keyCode) {
      case 37:
        this.slideLeft();
        break;
      case 39:
        this.slideRight();
        break;
    }
  };
  slide = () => {
    const { resetCol } = this.props.rec;
    resetCol();
    this.setState({
      currentPoster: 0,
      isFirstPoster: true,
      isLastPoster: false
    });
  };
  slideRight = () => {
    const { currentPoster, postersCount } = this.state;
    const { incCol } = this.props.rec;
    const nextPoster = currentPoster + 1;
    const needUpdate = nextPoster < postersCount;
    if (!needUpdate) return;
    incCol();
    this.setState({
      currentPoster: nextPoster,
      isFirstPoster: false,
      isLastPoster: nextPoster === postersCount - 1
    });
  };
  slideLeft = () => {
    const { currentPoster } = this.state;
    const { decCol } = this.props.rec;
    const nextPoster = currentPoster - 1;
    const needUpdate = nextPoster >= 0;
    if (!needUpdate) return;
    decCol();
    this.setState({
      currentPoster: nextPoster,
      isLastPoster: false,
      isFirstPoster: nextPoster === 0
    });
  };
  componentDidMount = () => {
    this.addListeners();
  };
  componentWillUnmount = () => {
    this.removeListeners();
  };
  addListeners = () => {
    if (!this.canUseDOM) return;
    window.addEventListener("keydown", this.onKeyDown, false);
  };
  removeListeners = () => {
    window.removeEventListener("keydown", this.onKeyDown, false);
  };

  render = () => {
    const { currentPoster, postersCount } = this.state;
    let { row, column } = this.props.rec;
    const posters =
      this.props.children instanceof Array
        ? this.props.children
        : [this.props.children];
    const guiInvert = posters[currentPoster].props.invert || false;
    const counter = !!this.props.counter;
    return (
      <div className="HorizontalPosters">
        <HGUI
          current={currentPoster}
          slideLeft={this.slideLeft}
          slideRight={this.slideRight}
          count={postersCount}
          invert={guiInvert}
          counter={counter}
        />
        <div
          className="posters"
          style={{
            width: `${postersCount * 100}vw`,
            transform: `translateX(-${currentPoster * 100}vw)`
          }}
        >
          {posters.map((poster, idx) => {
            return React.cloneElement(poster, {
              key: idx,
              currentPoster: idx,
              postersCount,
              rec: {
                ...this.props.rec,
                row,
                column: column++
              }
            })
          })}
        </div>
      </div>
    );
  };
}

export default HorizontalPosters;
