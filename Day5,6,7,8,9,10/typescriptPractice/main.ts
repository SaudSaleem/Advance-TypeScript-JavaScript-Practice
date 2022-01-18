let anyy: any;
anyy = 5;
anyy = "a";
//TYPE ANNOTATION/DECALARTION
let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, "a", true];

//ENUM (Group of related constants)
enum Color {
  Red = 1,
  Blue = 2,
  Green = 3,
}
let backGroundColor = Color.Blue;

//TYPE ASSERTION
export let message; //type: any
//let message = 'saud' type: string
message = "saud";
let str1 = message.endsWith("d");
let str2 = (<string>message).endsWith("d"); // this tell compiler that  treat 'message' as string but this type assertion does change type: any to type: string
let str3 = (message as string).endsWith("d");

// let drawPoint = (point) => {
// }

//INLINE ANNOTATION EXAMPLE
// let drawPoint = (point : {
//     x: number,
//     y: number
// }) => {
// }

//INTERFACE EXAMPLE
// Interface is technique to define actual structure of object or classes, if these structure not follow then ERROR will be geneated.
// Interface can be use multiple times.
interface Point {
  x: number;
  y: number;
  getPoint?: () => void; // in interface methods has only signature, actuall implemention/logic should be at somewhere else.
  // ? opeator means this method is optional for the object who uses this interface
  point?: () => string;
}
let drawPoint = (point: Point) => {
  console.log(point.x);
};
drawPoint({
  x: 1,
  y: 2,
});

//COHESION (In OOP cohestion is a concept all related properties/fiels and methods should be at same place i:e Classes )

class PointClass {
  x: number;
  y: number;
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
  draw() {
    console.log(this.x + this.y);
  }
}
let pointObj = new PointClass(1, 2);
pointObj.draw();


//ACCESS MODIFIER (PUBLIC,PRIVATE,PROTECTED)
class ModifierClass {
   private x: number;
   private y: number;
    constructor(x?: number, y?: number) {
      this.x = x;
      this.y = y;
    }
    draw() {
      console.log(this.x + this.y);
    }
  }
  let modifierObj = new ModifierClass(1, 2);
  modifierObj.draw();
  
  //ANOTHER EXAMPLE OF INITIALIZE CLASS WITH CONSTRUCTOR (shorter syntax)
  class AnotherClass {
    // private x: number;
    // private y: number;
     constructor(private x?: number,public y?: number) {
    //    this.x = x;
    //    this.y = y;
     }
     draw() {
       console.log(this.x + this.y);
     }
   }

   //GETTERS SETTERS EXAMPLE
   class GetSetClass {
    private _x: number;
    private _y: number;
     constructor(x?: number, y?: number) {
       this._x = x;
       this._y = y;
     }
     draw() {
       console.log(this._x + this._y);
     }
     get x()
     {
         return this._x
     }
     set x(value){
         if(value < 1)
            throw new Error("Value cannot be less then 1");
        else this._x = value
            
     }
   }
   let getSetObj = new GetSetClass(1, 2);

   console.log(getSetObj.x)
   getSetObj.x = 10

   getSetObj.draw();

