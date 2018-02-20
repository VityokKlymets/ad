import axios from "axios";
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
const GET_OPTION = {
  method: "GET"
};
const url = {
  collections: {
    fetchActual: "/api/collections/actual",
    get: '/api/collections/get',
    addCollection: "/api/collections"
  },
  items : {
    get : '/api/items/get'
  }
};

export default {
  collections: {
    fetchActual: baseUrl =>
      fetch(baseUrl + url.collections.fetchActual, GET_OPTION).then(res =>
        res.json().then(rs => rs.collections)
      ),
    get: (baseUrl,id) =>
      fetch(baseUrl + url.collections.get + `?id=${id}`, GET_OPTION).then(res =>
        res.json().then(rs => rs.collection)
      ),

    addCollection: collection =>
      axios.post(url.collections.addCollection, { collection })
  },
  items : {
    get : (baseUrl,id) =>
    fetch(baseUrl + url.items.get + `?id=${id}`, GET_OPTION).then(res =>
      res.json().then(rs => rs.item)
    )
  }
};
