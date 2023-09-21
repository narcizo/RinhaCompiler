import jsonData from "./../source.rinha.json";

let varMap = new Map<string, any>();

// console.log(jsonData);

console.log(interpreter(jsonData.expression));
console.log("---------------------");

export function interpreter(node: any): any {
  switch (node.kind) {
    case "Print":
      console.log("Print");
      const print = interpreter(node.value);
      console.log(print);
      return print;
    case "Int":
      console.log("Int");
      return node.value;
    case "Str":
      console.log("Str");
      return node.value;
    case "Bool":
      console.log("Bool");
      return node.value;
    case "Var":
      return varMap.get(node.text);
    case "Let":
      console.log("Let");
      const varValue = interpreter(node.value);
      varMap.set(node.name.text, varValue);
      return interpreter(node.next);
    case "Binary":
      console.log("Binary");
      return operate(node.op, interpreter(node.lhs), interpreter(node.rhs));
    case "If":
      console.log("If");
      if (interpreter(node.condition)) {
        interpreter(node.then);
      } else {
        interpreter(node.otherwise);
      }
      break;
  }
}

function operate(op: string, lhs: any, rhs: any) {
  console.log("operate()");

  // Que bagulho horrivel
  switch (op) {
    case "Add":
      return lhs + rhs;
    case "Sub":
      return lhs - rhs;
    case "Mult":
      return lhs * rhs;
    case "Div":
      return lhs / rhs;
    case "Rem":
      return lhs % rhs;
    case "Eq":
      return lhs == rhs;
    case "Neq":
      return lhs != rhs;
    case "Lt":
      return lhs < rhs;
    case "Gt":
      return lhs > rhs;
    case "Lte":
      return lhs <= rhs;
    case "Gte":
      return lhs >= rhs;
    case "And":
      return lhs && rhs;
    case "Or":
      return lhs || rhs;
  }
}
