export const materialList = ["любой","дерево", "стекло", "метал"];
export const functionalList = ["обычный", "трансформер"];
export const typeList = [
  "все",
  "столы",
  "кресла",
  "стульчики",
  "шкафы",
  "кровати"
];

export class Paginator {
  type = typeList[0];
  material = materialList[0];
  functional = functionalList[0];
}
