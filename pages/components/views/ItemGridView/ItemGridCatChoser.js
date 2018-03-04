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
            padding: 10px 0 10px 100px;
          }
          ul{
            padding: 0;
            margin:0;
          }
          ul li {
            display: inline-block;
            text-align: center;
            text-transform: capitalize;
            cursor: pointer;
            transition: border-color 0.5s ease-in-out;
            border-right: 2px solid transparent;
            color: #333;
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
          }
          @media (max-width: 768px) {
            nav{
              flex-direction: column;
              padding: 0;
            }
            ul{
              padding: 0;
              display:flex;
              flex-direction: column;
            }
            ul li{
              padding: 5px 0px;
              font-weight: bold;
            }
            ul li:nth-child(even){
              background: rgba(128,128,128,.3);
            }
            ul li:nth-child(odd){
              background: rgba(128,128,128,.1);
            }
            ul li.chosed{
              border: 0;
              color: #fff;
              background: #1a3059;
            }
           
          }
        `}</style>
      </div>
    );
  };
}
export default CattegoryMenu;
