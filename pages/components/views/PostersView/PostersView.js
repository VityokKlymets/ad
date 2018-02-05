import React, { Component } from "react";
import Poster from "./Poster";
import VerticalPosters from "./VerticalPosters";
import HorizontalPosters from "./HorizontalPosters";
class PostersView extends Component {
  displayName = "PostersView";
  state = {
    currentRow: 1,
    currentColumn: 1
  };
  incRow = () => this.setState({ currentRow: this.state.currentRow + 1 });
  decRow = () => this.setState({ currentRow: this.state.currentRow - 1 });
  incCol = () => this.setState({ currentColumn: this.state.currentColumn + 1 });
  decCol = () => this.setState({ currentColumn: this.state.currentColumn - 1 });
  render = () => {
    const rec = {
      currentRow: this.state.currentRow,
      currentColumn: this.state.currentColumn,
      incRow: this.incRow,
      incCol: this.incCol,
      decRow: this.decRow,
      decCol: this.decCol,
      o: {
        column: 1,
        row: 0
      }
    };
    const { children, gui } = this.props;
    const guiProps = {};
    return (
      <div className="PosterView">
        <div className="view-area">
          {React.cloneElement(children, {
            rec
          })}
          }
          {gui && React.cloneElement(gui, guiProps)}
        </div>
      </div>
    );
  };
  static VerticalPosters = VerticalPosters;
  static HorizontalPosters = HorizontalPosters;
  static Poster = Poster;
}
export default PostersView;
