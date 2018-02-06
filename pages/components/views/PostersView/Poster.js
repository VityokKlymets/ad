import React, { Component } from "react";

class Poster extends Component {
  displayName = "Poster";
  render = () => {
    const { children, bgsrc, rec } = this.props;
    const invert = !!this.props.invert;
    const visible =
      this.props.rec.currentColumn === this.props.rec.o.column &&
      this.props.rec.currentRow === this.props.rec.o.row;
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
        {children && React.cloneElement(children, { invert, rec, visible })}
      </div>
    );
  };
}
export default Poster;
