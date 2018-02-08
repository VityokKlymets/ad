import React, { Component } from "react";
import { canUseDOM } from "../../utils/Util";
import VGUI from "./PostersGui/VGUI";
class VerticalPosters extends Component {
  displayName = "VerticalPosters";
  state = {
    currentPoster: 0,
    postersCount: this.props.children.length
  };
  canUseDOM = canUseDOM();
  canInteractive = () => {
    const { currentColumn, column } = this.props.rec;
    return currentColumn === column;
  };
  onKeyDown = e => {
    if (!this.canInteractive()) return;
    const keyCode = e.keyCode;
    switch (keyCode) {
      case 40:
        this.slideDown();
        break;
      case 38:
        this.slideUp();
        break;
    }
  };
  slideDown = () => {
    const { incRow } = this.props.rec;
    const { currentPoster, postersCount } = this.state;
    const nextPoster = currentPoster + 1;
    const needToChange = nextPoster < postersCount;
    if (!needToChange) return;
    incRow();
    this.setState({
      currentPoster: nextPoster,
      isFirstPoster: false,
      isLastPoster: nextPoster === postersCount - 1
    });
  };
  slideUp = () => {
    const { currentPoster } = this.state;
    const { decRow } = this.props.rec;
    const nextPoster = currentPoster - 1;
    const needToChange = nextPoster >= 0;
    if (!needToChange) return;
    decRow();
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
    const { children: posters } = this.props;
    const guiInvert = !!posters[currentPoster].props.invert;
    return (
      <div className="VerticalPosters">
        {this.canInteractive() && (
          <VGUI
            current={currentPoster}
            count={postersCount}
            invert={guiInvert}
          />
        )}
        <div
          className="posters"
          style={{
            transform: `translateY(-${currentPoster * 100}vh)`
          }}
        >
          {posters.map((poster, idx) => {
            return React.cloneElement(poster, {
              key: idx,
              currentPoster: idx,
              postersCount,
              rec: {
                ...this.props.rec,
                row: row++,
                column
              }
            });
          })}
        </div>
      </div>
    );
  };
}

export default VerticalPosters;
