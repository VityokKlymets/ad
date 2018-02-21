import React, { Component } from "react";
import api from "../../api/api";
import Spinner from "../spinners/Spinner";
import AddCollectionForm from "./AddCollectionForm";
class CollectionEditor extends Component {
  displayName = "CollectionEditor";
  state = {
    collections: [],
    loading: true,
    edit: false,
    editingCollection: null
  };
  initialLoading = () => {
    api.collections.getAll().then(collections => {
      this.setState({
        edit: false,
        editingCollection: null,
        loading: false,
        collections
      });
    });
  };
  componentDidMount = () => {
    this.initialLoading();
  };
  onRemoveClick = id => {
    this.setState({ loading: true });
    api.collections.delete(id).then(() => this.initialLoading());
  };
  onEditClick = id => {
    if (!this.state.edit) {
      this.setState({ loading: true });
      api.collections.get("", id).then(collection => {
        this.setState({
          edit: true,
          editingCollection: collection,
          loading: false
        });
      });
    } else {
      this.setState({
        edit: false,
        loading: false,
        editingCollection: null
      });
    }
  };
  onSubmit = collection => {
    return api.collections
      .change(this.state.editingCollection._id, collection)
      .then(() => {
        this.initialLoading();
      });
  };
  renderEditForm = () => (
    <AddCollectionForm
      submit={this.onSubmit}
      collection={this.state.editingCollection}
    />
  );
  renderCollection = (collection, idx) => (
    <tr key={idx}>
      <td>{collection.name}</td>
      <td>{collection._id}</td>
      <td>
        <div
          onClick={() => this.onEditClick(collection._id)}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
        </div>
      </td>
      <td>
        <div
          onClick={() => this.onRemoveClick(collection._id)}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z" />
          </svg>
        </div>
      </td>
    </tr>
  );
  renderTable = collections => (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Id</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {collections.map((collection, idx) => {
          return this.renderCollection(collection, idx);
        })}
      </tbody>
    </table>
  );
  render = () => {
    const { loading, collections, edit } = this.state;
    return (
      <div>
        <Spinner transparent loading={loading} />
        <div className="row justify-content-center">
          {!loading && (
            <div className="col-9">
              {edit ? this.renderEditForm() : this.renderTable(collections)}
            </div>
          )}
        </div>
      </div>
    );
  };
}

export default CollectionEditor;
