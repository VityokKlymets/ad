export const materialList = ["дерево", "стекло", "метал"];
export const functionalList = ["обычный", "трансформер", "раскладной"];
export const typeList = [
  "столы",
  "кресла",
  "стульчики",
  "шкафы",
  "кровати",
  "диваны"
];
export const typeDefault = "все";
export const materialDefault = "любой";
export class Paginator {
  page = {
    itemsCount: 0,
    itemPerPage: 8,
    pagesLength: 0,
    currentPage: 0
  };
  type = typeDefault;
  material = materialDefault;
  functional = functionalList[0];
}
