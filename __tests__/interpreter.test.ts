import { interpreter } from "../src/interpreter";
import jsonSubjects from "./rinhaJsonTestSubjects.json";

//TODO individualizar arquivo json de teste

describe("Print", () =>{
  test("Hello World!", ()=>{
    expect(interpreter(jsonSubjects.print.helloWorld.expression)).toBe("olá mundo");
  });

  test("Sum string + number", () => {
    expect(interpreter(jsonSubjects.print.stringNumber.expression)).toBe("olá mundo 123");
  });

  test("Sum string + number + string", () => {
    expect(interpreter(jsonSubjects.print.stringNumberString.expression)).toBe("olá mundo 123 abc");
  });
  test("Sum string + number + boolean", () => {
    expect(interpreter(jsonSubjects.print.stringNumberBoolean.expression)).toBe("olá mundo 124");
  });
})

describe("Let", () =>{
  test("Simple Let", ()=>{
    console.log(interpreter(jsonSubjects.let.simpleLet.expression));
    expect(interpreter(jsonSubjects.let.simpleLet.expression)).toBe(2);
  });

  //TODO let com o mesmo nome de variável mas com valor diferente
})
