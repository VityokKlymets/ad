import axios from 'axios';
import fetch from "isomorphic-fetch";
const SendDataOption = data => {
  return {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  };
};
const url = {
  collections: {
    fetchActual: process.env.HOST + "/api/collections/actual",
    addCollection: "/api/collections"
  }
};

export default {
  collections: {
    fetchActual: () =>
      fetch(url.collections.fetchActual).then(res => res.json().collections),
    addCollection: collection =>
      axios.post(url.collections.addCollection,{collection})
  }
};