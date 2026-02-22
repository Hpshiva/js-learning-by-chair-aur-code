let num=32;
let str="shiva"
const bigNum=23423423423n
const symbolId1=Symbol('123')
const symbolId2=Symbol('123')
let checkNum=null
let someUndefined;

// console.table([num,str,bigNum,symbolId1,symbolId2,checkNum,someUndefined]);
// console.table([typeof(num),typeof(str),typeof(bigNum),typeof(symbolID1),typeof(symbolID2),typeof(checkNum),typeof(someUndefined)])


console.table([
  { variable: "num", value: num, type: typeof num },
  { variable: "str", value: str, type: typeof str },
  { variable: "bigNum", value: bigNum, type: typeof bigNum },
  { variable: "symbolId1", value: symbolId1, type: typeof symbolId1 },
  { variable: "symbolId2", value: symbolId2, type: typeof symbolId2 },
  { variable: "checkNum", value: checkNum, type: typeof checkNum },
  { variable: "someUndefined", value: someUndefined, type: typeof someUndefined }
]);