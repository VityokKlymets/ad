import React, { Component } from "react";

class Poster extends Component {
  displayName = "Poster";
  state = {
    visible: this.props.currentPoster === this.props.rec.currentRow
  };
  render = () => {
    const { children, bgsrc} = this.props;
    const invert = !!this.props.invert;
    const { visible } = this.state;
    return (
      <div className={`poster ${visible ? "visible" : ""}`}>
        {bgsrc && (
          <div
            className="poster-full-image"
            style={{
              backgroundImage: `url(${bgsrc})`
            }}
          />
        )}
        {children && React.cloneElement(children,{invert})}
      </div>
    );
  };
}
export default Poster;
