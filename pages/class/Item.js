import { functionalList, typeList, materialList } from "./ItemPaginator";
export default class Item {
  name = "";
  description = "";
  params = {
    width: "",
    height: "",
    length: "",
    price: ""
  };
  functional = functionalList[0];
  type = typeList[0];
  material = materialList[0];
  images = [];
}
