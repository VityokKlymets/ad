import axios from "axios";
import fetch from "isomorphic-fetch";
const SendDataOption = data => {
  return {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
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
    get: "/api/collections/get",
    getAll: "/api/collections/getAll",
    addCollection: "/api/collections",
    change: "/api/collections/change",
    delete: "/api/collections/delete"
  },
  items: {
    get: "/api/items/get",
    getAll: "/api/items/getAll",
    addItem: "/api/items",
    change: "/api/items/change",
    delete: "/api/items/delete",
    paginate: "/api/items/paginate"
  }
};

export default {
  collections: {
    fetchActual: baseUrl =>
      fetch(baseUrl + url.collections.fetchActual, GET_OPTION).then(res =>
        res.json().then(rs => rs.collections)
      ),
    get: (baseUrl = "", id) =>
      fetch(baseUrl + url.collections.get + `?id=${id}`, GET_OPTION).then(res =>
        res.json().then(rs => rs.collection)
      ),
    change: (id, data) => axios.post(url.collections.change, { id, data }),
    addCollection: collection =>
      axios.post(url.collections.addCollection, { collection }),
    getAll: () =>
      axios(url.collections.getAll).then(res => res.data.collections),
    delete: id => axios.post(url.collections.delete, { id })
  },
  items: {
    addItem: item => axios.post(url.items.addItem, { item }),
    get: (baseUrl, id) =>
      fetch(baseUrl + url.items.get + `?id=${id}`, GET_OPTION).then(res =>
        res.json().then(rs => rs.item)
      ),
    getAll: () => axios(url.items.getAll).then(res => res.data.items),
    change: (id, data) => axios.post(url.items.change, { id, data }),
    delete: id => axios.post(url.items.delete, { id }),
    paginate: (baseUrl, paginator) =>
      fetch(baseUrl + url.items.paginate, SendDataOption({ paginator })).then(
        res =>
          res.json().then(rs => {
            return { items: rs.items, paginator: rs.paginator };
          })
      )
  }
};
