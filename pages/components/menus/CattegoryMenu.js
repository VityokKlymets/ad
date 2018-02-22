import React, { Component } from "react";
class CattegoryMenu extends Component {
  displayName = "CattegoryMenu";
  state = {
    elements: ["Все",...this.props.elements] || []
  }
  renderListStyles = () =>{
      const length = this.state.elements.length;
      let style = '';
      this.state.elements.forEach((value,idx)=>{
          style+=`li.child-${idx}:hover ~ hr {
            margin-left : ${100/length*(idx)}%;
          }`;
      })
      return style;
  }
  render = () => {
    const {elements} = this.state;
    return (
      <div>
        <nav>
          <ul>
            {elements.map((elem, idx) => (
              <li key={idx} className={`child-${idx}`}>
                <a href="#">{elem}</a>
              </li>
            ))}
            <hr />
          </ul>
        </nav>
        <style jsx>{`
          nav {
              width : 50%;
              margin : 0 auto;
          }
          ul li {
            display: inline;
            text-align: center;
            text-transform: capitalize;
          }
          a {
            display: inline-block;
            width: ${100/this.state.elements.length}%;
            padding: 0.75rem 0;
            margin: 0;
            text-decoration: none;
            color: #333;
          }
          ${this.renderListStyles()}
          hr {
            height: 0.25rem;
            width: ${100/this.state.elements.length}%;
            margin: 0;
            background: #1a3059;
            border: none;
            transition: 0.3s ease-in-out;
          }
        `}</style>
      </div>
    );
  };
}

export default CattegoryMenu;
