import fetch from "isomorphic-fetch";
export default {
  collections: {
    fetchActual: (baseUrl) => fetch(baseUrl+"/api/collections/actual").then(res=> res.json().collections)
  }
};
