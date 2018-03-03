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
  resetCol = () => this.setState({ currentColumn: 1 });
  resetRow = () => this.setState({ currentRow: 1 });
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
      resetCol: this.resetCol,
      resetRow: this.resetRow,
      row: 1,
      column: 1
    };
    const { children, gui } = this.props;
    const guiProps = {};
    return (
      <div className="PosterView">
        <div className="view-area">
          {React.cloneElement(children, {
            rec
          })}
          {gui && React.cloneElement(gui, guiProps)}
        </div>
        <style jsx global>{`
          .PosterView .view-area {
            position: relative;
            height: 100vh;
            overflow: hidden;
          }
          .PosterView .posters {
            transition: transform 0.5s ease-in-out;
            position: absolute;
            background: #fff;
          }

          .PosterView .poster {
            position: relative;
            box-sizing: border-box;
          }
          .HorizontalPosters > .posters {
            display: flex;
            flex-direction: row;
            width: 100vh;
          }
          .VerticalPosters > .posters {
            display: flex;
            flex-direction: column;
            width: 100vw;
          }
          .VerticalPosters .poster {
            height: 100vh;
          }
          .HorizontalPosters .poster {
            width: 100vw;
          }
          @media (max-width: 768px) {
            .PosterView .view-area {
              position: static;
              height: auto;
              overflow: visible;
            }
            .PosterView .posters {
              transform : translate(0%,0%) !important;
              position: static;
              display: block;
              height: auto !important;
              width: 100% !important;
            }
            .VerticalPosters .poster,
            .HorizontalPosters .poster {
              position: static;
              display: block;
              height: auto !important;
              width: 100% !important;
            }
          }
        `}</style>
      </div>
    );
  };
  static VerticalPosters = VerticalPosters;
  static HorizontalPosters = HorizontalPosters;
  static Poster = Poster;
}
export default PostersView;
