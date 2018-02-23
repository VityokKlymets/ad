import React, { Component } from "react";
class CattegoryMenu extends Component {
  displayName = "CattegoryMenu";
  state = {
    elements: this.props.elements || [],
    chosed: this.props.chosed || this.props.elements[0] || ""
  };
  componentWillReceiveProps = props =>{
    this.setState({
      chosed: props.chosed
    })
  }
  choose = value => {
    this.setState({
      chosed: value
    });
   this.props.onChose(value);
  };
  render = () => {
    const { elements, chosed } = this.state;
    return (
      <div>
        <nav>
          <ul>
            {elements.map((elem, idx) => (
              <li
                onClick={() => this.choose(elem)}
                key={idx}
                className={`${chosed === elem ? "chosed" : ""}`}
              >
                <span>{elem}</span>
              </li>
            ))}
          </ul>
        </nav>
        <style jsx>{`
          nav {
            display: flex;
            justify-content: center;
            padding: 10px 0;
          }
          ul li {
            display: inline-block;
            text-align: center;
            text-transform: capitalize;
            cursor: pointer;
            transition: border-color 0.5s ease-in-out;
            border-right: 2px solid transparent;
          }
          ul li:hover {
            border-right-color: #1a3059;
          }
          ul li.chosed {
            border-bottom: 2px solid #1a3059;
          }
          span {
            display: inline-block;
            padding: 0rem 1em;
            margin: 0;
            text-decoration: none;
            color: #333;
          }
        `}</style>
      </div>
    );
  };
}
export default CattegoryMenu;
