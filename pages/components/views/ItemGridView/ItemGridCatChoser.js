import React, { Component } from "react";
import { typeList, typeDefault } from "../../../class/ItemPaginator";
class CattegoryMenu extends Component {
  displayName = "CattegoryMenu";
  state = {
    paginator: this.props.paginator
  };
  onPaginatorChange = paginator => {
    this.setState({ paginator });
    this.props.onPaginatorChange(paginator);
  };
  componentWillReceiveProps = ({paginator}) => this.setState({paginator})
  onTypeChange = value => {
    this.onPaginatorChange({
      ...this.state.paginator,
      type: value,
      page: {
        ...this.state.paginator.page,
        currentPage: 0
      }
    });
  };
  render = () => {
    const tList = [typeDefault, ...typeList];
    const chosed = this.state.paginator.type;
    return (
      <div>
        <nav>
          <ul>
            {tList.map((elem, idx) => (
              <li
                onClick={() => this.onTypeChange(elem)}
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
