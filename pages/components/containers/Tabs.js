import React, { Component } from "react";
class Tabs extends Component {
  displayName = "Tabs";
  state = {
    active: 0
  };
  render = () => {
    const children =
      this.props.children instanceof Array
        ? this.props.children
        : [this.props.children];
    const { active } = this.state;
    return (
      <div>
        <div className="row tabline">
          {children.map((tab, idx) => (
            <div
              onClick={()=>this.setState({ active: idx })}
              key={idx}
              className={`tab-btn ${idx === active ? "active" : ""}`}
            >
              {tab.props.tabName ? tab.props.tabName : "none"}
            </div>
          ))}
        </div>
        <div className="row pt-4">
          <div className="col">
            {children.map((tab, idx) => {
              return (
                idx === active &&
                React.cloneElement(tab, { ...tab.props, key: idx })
              );
            })}
          </div>
        </div>
        <style jsx>{`
          .tabline {
            padding: 10px;
          }
          .tab-btn.active {
            background: #0d7a11;
          }
          .tab-btn.active:hover {
            background: #109615;
          }
          .tab-btn {
            box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
            margin-left: 10px;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            padding: 10px 15px;
            background: #bf2222;
            border-radius: 10px;
          }
          .tab-btn:hover {
            background: #c41725;
          }
        `}</style>
      </div>
    );
  };
}

export default Tabs;
