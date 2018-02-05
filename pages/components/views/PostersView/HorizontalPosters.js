import React, { Component } from "react";
import { canUseDOM } from "../../utils/Util";
class HorizontalPosters extends Component {
  displayName = "HorizontalPosters";
  state = {
    currentPoster: 0,
    isFirstPoster: true,
    isLastPoster: false,
    postersCount: this.props.children.length,
    row: this.props.rec.o.row,
    column: this.props.rec.o.column
  };
  row = this.props.rec.o.row;
  column = this.props.rec.o.column;
  canUseDOM = canUseDOM();
  canInteractive = () => {
    const { currentRow } = this.props.rec;
    const { row } = this.state;
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
  renderPostersButtons = () => {
    const { postersCount, currentPoster } = this.state;
    const buttons = [];
    for (let i = 0; i < postersCount; i++) {
      buttons.push(
        <div
          key={i}
          className={`poster-button ${i === currentPoster ? "active" : ""}`}
          onClick={() => {
            this.setState({ currentPoster: i });
          }}
        />
      );
    }
    return buttons;
  };
  renderArrows = () => {
    const { isLastPoster, isFirstPoster } = this.state;
    return (
      <div>
        <div
          className={`arrow left-arrow ${!isFirstPoster ? "active" : ""}`}
          onClick={this.slideLeft}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
          </svg>
        </div>

        <div
          className={`arrow right-arrow ${!isLastPoster ? "active" : ""}`}
          onClick={this.slideRight}
        >
          <svg version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
          </svg>
        </div>
      </div>
    );
  };
  render = () => {
    const {
      currentPoster,
      postersCount,
      isFirstPoster,
      isLastPoster
    } = this.state;
    const { children } = this.props;
    return (
      <div className="HorizontalPosters">
        {this.canInteractive() && (
          <div className="poster-gui">
            <div className="poster-btn-wrapper">
              {this.renderPostersButtons()}
            </div>
            {this.renderArrows()}
          </div>
        )}
        <div
          className="posters"
          style={{
            width: `${postersCount * 100}vw`,
            transform: `translateX(-${currentPoster * 100}vw)`
          }}
        >
          {children.map((child, idx) => {
            return React.cloneElement(child, {
              key: idx,
              currentPoster: idx,
              postersCount,
              slideLeft: this.slideLeft,
              slideRight: this.slideRight,
              rec: {
                ...this.props.rec,
                o: {
                  row: this.row,
                  column: ++this.column
                }
              }
            });
          })}
          }
        </div>
      </div>
    );
  };
}

export default HorizontalPosters;
