export const materialList = ["дерево", "стекло", "метал"];
export const functionalList = ["обычный", "трансформер","раскладной"];
export const typeList = [
  "столы",
  "кресла",
  "стульчики",
  "шкафы",
  "кровати",
  "диваны"
];

export class Paginator {
  page= {
    itemsCount: 0,
    itemPerPage : 8,
    pagesLength: 0,
    currentPage : 0
  };
  type = typeList[0];
  material = materialList[0];
  functional = functionalList[0];
}
