import React, { Component } from "react";
import Spinner from "../spinners/Spinner";
import { connect } from "react-redux";
import api from "../../api/api";
import { loadItems } from '../../actions/basket'
class basket extends Component {
  state = {
    loading: false,
    data: []
  };
  componentDidMount = () => {
    if (this.props.items.length > 0) {
      this.setState({ loading: true });
      api.items.loadItems(this.props.items).then(data =>
        this.setState({
          loading: false,
          data
        })
      );
    }
  };
  displayName = "basket";
  render = () => {
    const { loading, data } = this.state;
    return (
      <div>
        {loading ? (
          <Spinner loading={true} />
        ) : (
          <div>
            {data.length > 0 ? <div>Items Here</div> : <div>Nothing here</div>}
          </div>
        )}
      </div>
    );
  };
}

const mapStateToProps = state => ({
  items: state.basket.items
});
export default connect(mapStateToProps, { loadItems })(basket)
