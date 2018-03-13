import React, { Component } from "react";
import Spinner from "../spinners/Spinner";
import Link from "next/link";
import { connect } from "react-redux";
import api from "../../api/api";
import { loadItems, erase } from "../../actions/basket";
import { orderItems } from "../../actions/order";
class basket extends Component {
  state = {
    loading: false,
    data: []
  };
  setItem(item, idx) {
    let newData = this.state.data.slice();
    newData[idx] = item;
    this.setState({
      data: newData
    });
  }
  setCount(item, value) {
    if (value <= 0) return item;
    return { ...item, count: value };
  }
  onAddClick = (item, idx) => {
    this.setItem(this.setCount(item, item.count + 1), idx);
  };
  onMinusClick = (item, idx) => {
    this.setItem(this.setCount(item, item.count - 1), idx);
  };
  onRemoveClick = (idx, item) => {
    let data = this.state.data.slice();
    this.props.erase(item._id);
    data.splice(idx, 1);
    this.setState({
      data
    });
  };
  onAddOrderClick = () => {
    this.props.orderItems(this.state.data);
  };
  parseData = data => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      let el = { ...data[i], count: 0 };
      for (let j = 0; j < data.length; j++) {
        if (el._id === data[j]._id) {
          el.count++;
        }
      }
      let contains = false;
      for (let n = 0; n < result.length; n++) {
        if (el._id === result[n]._id) {
          contains = true;
          break;
        }
      }
      if (!contains) result.push(el);
    }
    return result;
  };
  getPrice = () => {
    return this.state.data.reduce((prev, current) => {
      return prev + current.params.price * current.count;
    }, 0);
  };
  componentDidMount = () => {
    if (this.props.items.length > 0) {
      this.setState({ loading: true });
      api.items.loadItems(this.props.items).then(data => {
        this.setState({
          loading: false,
          data: this.parseData(data)
        });
      });
    }
  };
  renderItems = () => {
    return this.state.data.map((item, idx) => {
      return (
        <div key={idx} className="item">
          <div className="row">
            <div className="col-1">
              <div onClick={() => this.onRemoveClick(idx, item)}>
                <svg
                  className="remove"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
                </svg>
              </div>
            </div>
            <div className="col-4">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${item.images[0]})`
                }}
              />
            </div>
            <div className="col-3 d-flex flex-column align-items-start justify-content-around">
              <h3>{item.name}</h3>
              <div className="price">{item.params.price} грн</div>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <div
                onClick={() => {
                  this.onAddClick(item, idx);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z" />
                </svg>
              </div>

              <span>{item.count}</span>
              <div
                onClick={() => {
                  this.onMinusClick(item, idx);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path d="M38 26H10v-4h28v4z" />
                </svg>
              </div>
            </div>
            <div className="col-2 d-flex flex-column align-items-center justify-content-center">
              <h3>Сумма</h3>
              <div>{item.params.price * item.count} грн.</div>
            </div>
          </div>
          <style jsx>{`
            .item {
              border-bottom: 1px solid #ccc;
              padding: 20px 0;
            }
            .image {
              height: 200px;
              width: 100%;
              background-size: cover;
              background-repeat: no-repeat;
            }
            h3 {
              font-size: 1.2em;
              color: #444;
            }
            span {
              color: #071768;
              font-weight: bold;
              font-size: 1.7em;
            }
            .price {
              background: #35661f;
              color: #fff;
              font-weight: bold;
              padding: 0.6em;
              border-radius: 10px;
            }
            svg.remove {
              fill: #444;
              box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
              border-radius: 50%;
              width: 30px;
              cursor: pointer;
              height: 30px;
            }
            svg:hover {
              opacity: 0.5;
            }
            svg {
              transition: opacity 0.5s ease-in-out;
              cursor: pointer;
              fill: #058bb5;
            }
          `}</style>
        </div>
      );
    });
  };
  displayName = "basket";
  render = () => {
    const { loading, data } = this.state;
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12">
            {loading ? (
              <Spinner loading={true} />
            ) : (
              <div>
                {data.length > 0 ? (
                  <div>
                    {this.renderItems()}
                    <div>
                      <div className="info d-flex justify-content-center pt-3">
                        <span>Итого: </span>
                        <span>{this.getPrice()} грн.</span>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div onClick={this.onAddOrderClick}>
                          <Link href="/order">
                            <button className="btn btn-primary">
                              Оформить заказ
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>Nothing here</div>
                )}
              </div>
            )}
          </div>
        </div>
        <style jsx>{`
          .info span {
            font-size: 1.3em;
            padding: 5px;
          }
        `}</style>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  items: state.basket.items
});
export default connect(mapStateToProps, { loadItems, erase,orderItems })(basket);
