

// document.write("hello dfeom khayyal");

// console.log("hello form ahemd");
// console.error("Error");
// console.table(["Osama", "Ahmed", "Sayed"]);

// console.log("Hello From %cJS %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px");


/*
  ES6
*/

// var myName = "Osama";

// console.log("Hello " + myName);
// console.log(`Hello ${myName}`);

/*
  Data Types Intro
  - String
  - Number
  - Array => Object
  - Object
  - Boolean
*/

// console.log("Osama Mohamed");
// console.log(typeof "Osama Mohamed");
// console.log(typeof 5000);
// console.log(typeof 5000.99);
// console.log(typeof [10, 15, 17]);
// console.log(typeof { name: "Osama", age: 17, country: "Eg" });
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);

/*
  Variables Intro
  - What Is Variable ?
  - Why We Use Variables ?
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - Variable Without Var
  - Multiple Variables In The Same Line
  - Id And Global Variable
  - Loosely Typed vs Strongly Typed
*/

// var user = "Sayed";
// console.log(user);


/*
  Identifiers
  - Name Conventions And Rules
  - Reserved Words
*/

// var userName = "Sayed";

// console.log(userName);

/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/


/*
  String Syntax + Character Escape Sequences
  \ Escape + Line Continue
  \n
*/

// console.log('Elzero Web "School"');
// console.log("Elzero Web 'School'");
// console.log("Elzero Web \"School\"");
// console.log('Elzero \\ Web \'School\'');
// console.log("Elzero \
// Web \
// School");
// console.log("Elzero\nWeb\nSchool");


/*
  Concatenation
*/

// let a = "We Love";
// let b = "JavaScript";

// document.write(a + " " + b);

// console.log(a, b);


/*
  Template Literals (Template Strings)
*/

// First Example

// let a = "We Love";
// let b = "JavaScript";
// let c = "And";
// let d = "Programming";

// console.log(a = " \"\" " + b +
// "\n" + c + " " + d);

// console.log(`${a} "" '' \\ ${b}
// ${c} ${d}`);

// // Second Example

// let title = "Elzero";
// let desc = "Elzero Web School";

// let markup = `
//   <div class="card">
//     <div class="child">
//       <h2>${title}</h2>
//       <p>${desc}</p>
//     </div>
//   </div>
// `;

// document.write(markup);


/*
  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
*/

// console.log(10 + 20);
// console.log(10 + "Osama");

// console.log(10 - 20);
// console.log(10 - "Osama"); // NaN
// console.log(typeof NaN);

// console.log(10 * 20);
// console.log(10 * -20);

// console.log(20 / 5);
// console.log(20 / 3);

// console.log(2 ** 4);
// console.log(2 * 2 * 2 * 2);

// console.log(10 % 2);
// console.log(11 % 2); // Remove 1


/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/

// console.log(+100);
// console.log(+"100");
// console.log(+"-100");
// console.log(+"Osama");
// console.log(+"15.5");
// console.log(+0xff);
// console.log(+null);
// console.log(+false);
// console.log(+true);

// console.log(-100);
// console.log(-"100");
// console.log(-"-100");
// console.log(-"Osama");
// console.log(-"15.5");
// console.log(-0xff);
// console.log(-null);
// console.log(-false);
// console.log(-true);

// console.log(Number("100"));

/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

// let a = "100";
// let b = 20;
// let c = true;

// console.log(+a + b + c);

/*
  Assignment Operators
*/

// let a = 10;

// a = a + 20;

// a = a + 70;

// a += 100; // a = a + 100

// a -= 50; // a = a - 50

// a /= 50; // a = a / 50
// document.writeln(a);

/*
  Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

// console.log(1000000);
// console.log(1_000_000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(10 * 10 * 10 * 10 * 10 * 10);
// console.log(1000000.0);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE + 23434343434);

/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

// console.log((100).toString());
// console.log(100.10.toString());

// console.log(100.554555.toFixed(2));

// console.log(Number("100 Osama"));
// console.log(+"100 Osama");
// console.log(parseInt("100 Osama"));
// console.log(parseInt("Osama 100 Osama"));
// console.log(parseInt("100.500 Osama"));
// console.log(parseFloat("100.500 Osama"));

// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.500));
// console.log(Number.isInteger(100));

// console.log(Number.isNaN("Osama" / 20));

/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/

// console.log(Math.round(99.2));
// console.log(Math.round(99.5));

// console.log(Math.ceil(99.2));
// console.log(Math.floor(99.9));

// console.log(Math.min(10, 20, 100, -100, 90));
// console.log(Math.max(10, 20, 100, -100, 90));

// console.log(Math.pow(2, 4));
// console.log(Math.random());
// console.log(Math.trunc(99.5)); return only intger part 99 


/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

// let theName = "  Ahmed  ";

// console.log(theName);
// console.log(theName[1]);
// console.log(theName[5]);

// console.log(theName.charAt(1));
// console.log(theName.charAt(5));

// console.log(theName.length);
// console.log(theName.trim());

// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());

// console.log(theName.trim().charAt(2).toUpperCase());

/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

// let a = "Elzero Web School";

// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 8));
// console.log(a.indexOf("o")); // 5
// console.log(a.lastIndexOf("o")); // 15

// console.log(a.slice(2, 6));
// console.log(a.slice(-5, -3));

// console.log(a.repeat(5));

// console.log(a.split("",7));


/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

// let a = "Elzero Web School";

// console.log(a.length);

// console.log(a.substring(2, 6));
// console.log(a.substring(6, 2));
// console.log(a.substring(-10, 6)); // 0 - 6
// console.log(a.substring(a.length - 5, a.length - 3));

// console.log(a.substr(0, 6));
// console.log(a.substr(17));
// console.log(a.substr(-3));
// console.log(a.substr(-5, 2));

// console.log(a.includes("Web"));
// console.log(a.includes("Web", 8));

// console.log(a.startsWith("E"));
// console.log(a.startsWith("E", 2));
// console.log(a.startsWith("zero", 2));

// console.log(a.endsWith("l"));

/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

// console.log(10 == "10"); // Compare Value Only
// console.log(-100 == "-100"); // Compare Value Only
// console.log(10 != "10"); // Compare Value Only

// console.log(10 === "10"); // Compare Value + Type
// console.log(10 !== "10"); // Compare Value + Type
// console.log(10 !== 10); // Compare Value + Type

// console.log(10 > 20);
// console.log(10 > 10);
// console.log(10 >= 10);

// console.log(10 < 20);
// console.log(10 < 10);
// console.log(10 <= 10);

// console.log(typeof "Osama" === typeof "Ahmed");

/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

// console.log(true);
// console.log(!true);

// console.log(!(10 == "10"));

// console.log(10 == "10" && 10 > 8 && 10 > 50);

// console.log(10 == "10" || 10 > 80 || 10 > 50);

/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

// let price = 100;
// let discount = true;
// let discountAmount = 30;
// let country = "KSA";

// if (discount === true) {
//   price -= discountAmount; // price = price - discountAmount
// } else if (country === "Egypt") {
//   price -= 40;
// } else if (country === "Syria") {
//   price -= 50;
// } else {
//   price -= 10;
// }

// console.log(price);

/*
  Nested If
*/

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt";
// let student = true;

// if (discount === true) {

//   price -= discountAmount;

// } else if (country === "Egypt") {

//   if (student === true) {

//     price -= discountAmount + 30;

//   } else {

//     price -= discountAmount + 10;

//   }

// } else {

//   price -= 10;

// }

// console.log(price);

/*
  Conditional (Ternary) Operator
*/

// let theName = "Mona";
// let theGender = "Female";
// let theAge = 30;

// if (theGender === "Male") {
//   console.log("Mr");
// } else {
//   console.log("Mrs");
// }

// // Condition ? If True : If False

// theGender === "Male" ? console.log("Mr") : console.log("Mrs");

// let result = theGender === "Male" ? "Mr" : "Mrs";

// document.write(result);

// console.log(theGender === "Male" ? "Mr" : "Mrs");

// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

// theAge < 20
//   ? console.log(20)
//   : theAge > 20 && theAge < 60
//   ? console.log("20 To 60")
//   : theAge > 60
//   ? console.log("Larger Than 60")
//   : console.log("Unknown");

/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// let price = 0;

// console.log(`The Price Is ${price || 200}`);
// console.log(`The Price Is ${price ?? 200}`);

/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

// let day = "A";

// switch (day) {
//   default:
//     console.log("Unknown Day");
//     break;
//   case 0:
//     console.log("Saturday");
//     break;
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//   case 3:
//     console.log("Monday");
//     break;
// }

/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

// console.log(`Hello ${myFriends[0]}`);
// console.log(`Hello ${myFriends[2]}`);
// console.log(`${myFriends[1][2]}`);
// console.log(`Hello ${myFriends[3][1]}`);
// console.log(`${myFriends[3][1][2]}`);

// console.log(myFriends);
// myFriends[1] = "Gamal";
// console.log(myFriends);
// myFriends[3] = ["Sameh", "Ameer"];
// console.log(myFriends);

// console.log(Array.isArray(myFriends));

/*
  Array Methods
  - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// myFriends.length = 2;

// console.log(myFriends);

/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// console.log(myFriends);

// myFriends.unshift("Osama", "Nabil");

// console.log(myFriends);

// myFriends.push("Samah", "Eman");

// console.log(myFriends);

// let first = myFriends.shift();

// console.log(myFriends);

// console.log(`First Name Is ${first}`);

// let last = myFriends.pop();

// console.log(myFriends);

// console.log(`Last Name Is ${last}`);

/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

// console.log(myFriends);

// console.log(myFriends.indexOf("Ahmed"));
// console.log(myFriends.indexOf("Ahmed", 2));

// console.log(myFriends.lastIndexOf("Ahmed"));
// console.log(myFriends.lastIndexOf("Ahmed", -2));

// console.log(myFriends.includes("Ahmed"));
// console.log(myFriends.includes("Ahmed", 2));

// if (myFriends.lastIndexOf("Osama") === -1) {
//   console.log("Not Found");
// }

// console.log(myFriends.indexOf("Osama"));
// console.log(myFriends.lastIndexOf("Osama"));

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

// let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

// console.log(myFriends);
// console.log(myFriends.sort().reverse());

/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends);
// console.log(myFriends.slice());
// console.log(myFriends.slice(1));
// console.log(myFriends.slice(1, 3));
// console.log(myFriends.slice(-3));
// console.log(myFriends.slice(1, -2));
// console.log(myFriends.slice(-4, -2));
// console.log(myFriends);

// myFriends.splice(1, 2, "Sameer", "Samara");

// console.log(myFriends);

/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

// console.log(allFriends);

// console.log(allFriends.join());
// console.log(allFriends.join(""));
// console.log(allFriends.join(" @ "));
// console.log(allFriends.join("|"));
// console.log(allFriends.join("|").toUpperCase());

/*
  Loop
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
*/

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

/*
  Loop
  - Loop On Sequences
*/

// let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

// let onlyNames = [];

// for (let i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "string") {
//     onlyNames.push(myFriends[i]);
//   }
// }

// console.log(onlyNames);

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }

/*
  Loop
  - Nested Loops
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//   console.log("#".repeat(15));
//   console.log(`# ${products[i]}`);
//   console.log("#".repeat(15));
//   console.log("Colors: ");
//   for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//   }
//   console.log("Models: ");
//   for (let k = 0; k < models.length; k++) {
//     console.log(`- ${models[k]}`);
//   }
// }

/*
  Loop Control
  - Break
  - Continue
  - Label
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// mainLoop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestedLoop: for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//     if (colors[j] === "Green") {
//       break mainLoop;
//     }
//   }
// }

/*
  Loop
  - While
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let index = 0;

// while (index < products.length) {
//   console.log(products[index]);
//   index += 1;
// }

/*
  Loop
  - Do / While
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i<products.length);

// console.log(i);

/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

// function sayHello(userName) {
//   console.log(`Hi ${userName}`);
// }

// sayHello("Osama");
// sayHello("Sayed");
// sayHello("Ali");

/*
  Function Advanced Examples
*/

// function sayHello(userName, age) {
//   if (age < 20) {
//     console.log(`App is Not Suitable For You`);
//   } else {
//     console.log(`Hello ${userName} Your Age is ${age}`);
//   }
// }

// sayHello("Osama", 38);
// sayHello("Sayed", 40);
// sayHello("Ali", 18);

// function generateYears(start, end, exclude) {
//   for (let i = start; i <= end; i++) {
//     if (i === exclude) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// generateYears(2009, 2021, 2020);

/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

// function generate(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i === 15) {
//       return `Interrupting`;
//     }
//     console.log(i);
//   }
// }

// generate(10, 20);
/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

// function sayHello(username = "Unknown", age = "Unknown") {
//   // if (age === undefined) {
//   //   age = "Unknown";
//   // }
//   // age = age || "Unknown";
//   return `Hello ${username} Your Age Is ${age}`;
// }

// console.log(sayHello());

/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

// function calc(...numbers) {
//   // console.log(Array.isArray(numbers));
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i]; // result = result + numbers[i]
//   }
//   return `Final Result Is ${result}`;
// }

// console.log(calc(10, 20, 10, 30, 50, 30));

/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

// let calculator = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(calculator(10, 20));

// function sayHello() {
//   console.log("Hello Osama");
// }

// document.getElementById("show").onclick = sayHello;

// setTimeout(function()  {
//   console.log("Good");
// }, 2000);


/*
  Function
  - Function Inside Function
  - Return Function
*/

// // Example 1

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message;
// }

// console.log(sayMessage("Osama", "Mohamed"));

// // Example 2

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Mohamed"));

// // Example 3

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     function getFullName() {
//       return `${fName} ${lName}`;
//     }
//     return `${message} ${getFullName()}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Mohamed"));

/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

// let print = function () {
//   return 10;
// };

// let print = () => 10;

// let print = function (num) {
//   return num;
// };

// let print = num => num;

// let print = function (num1, num2) {
//   return num1 + num2;
// };

// let print = (num1, num2) => num1 + num2;

// console.log(print(100, 50));

/*
  Scope
  - Global And Local Scope
*/

// var a = 1;
// let b = 2;

// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();

/*
  Scope
  - Block Scope [If, Switch, For]
*/

// var x = 10;

// if (10 === 10) {
//   let x = 50;
//   console.log(`From If Block ${x}`);
// }

// console.log(`From Global ${x}`);

/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

// function parent() {
//   let a = 10;
//   let b =7
//   function child() {
//     console.log(a);
//     console.log(`From Child ${b}`);

//     function grand() {
//       let b = 100;
//       console.log(`From Grand ${a}`);
//       console.log(`From Grand ${b}`);
//     }
//     grand();
//   }
//   child();
// }
// parent();

