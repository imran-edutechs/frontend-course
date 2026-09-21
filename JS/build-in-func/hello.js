

// function greet(name, callback) {
//     console.log(`Hello, ${name}`); // Hello, Sakib
//     callback();
//     console.log('last code'); // Last code
// }

// function afterGreeting() {
//     console.log("Greeting finished!"); // Greeting Finished!
// }

// const xyz = "Sakib"

// greet(xyz, afterGreeting);


// setTimeout(afterGreeting, 2000);

// console.log("Start");





// const myFilter = (arr, cb) => { 
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         const cb_result = cb(element, i);
//         if (cb_result) result.push(element) 
//     }

//     return result;
// }

// console.log(myFilter(arr, (item)=> item%2===0));
// console.log(arr.filter( (item)=> item%2===0));


// const myMap = (arr, cb) => {
//     const result = [];
//       for (let i = 0; i < arr.length; i++) {
//           const element = arr[i];
//           const cb_result = cb(element, i);
//           result.push(cb_result);
//       }
//     return result;
// }

// // const res = arr.map((item) => item + 1)
// // console.log(res);
// const res = myMap(arr,(item) => item + 1);
// console.log(res);


// Scope in Javascript
// - There are three type of scope in Javascript
// 1, Global
// 2, function
// 3, Block Scope


// const appName = "Edutechs"; // Global scope

// function showGame() {
//       const gameName = "Freefire"; // Function scope

//       if (true) {
//             let playerName = "Sakib"; // Block scope

//             console.log(appName);  
//             console.log(gameName);   
//             console.log(playerName); 
//       }

//       console.log(appName);    
//       console.log(gameName);   
//       // console.log(playerName); // Error
// }

// showGame();

// console.log(appName); 
// console.log(gameName); // Error


// if (true) {
//       var city = "Dhaka";
//       let country = "Bangladesh";
// }

// console.log(city);


// if (true) {
//     var city = "Dhaka";
//     console.log(city);
// }


// console.log(city);


// function hello() { 

//     console.log(city);
//     function f1() { 
//         console.log(city);
//     }
//     f1()
// }
// hello()



// function f1() { 
//     function f2() { 
//         if (true) {
//             if (true) {
//                 var name = "Function scope";
//             }
//         }
//         console.log(name);
//     }
//     f2()
// }

// f1()


// const arr = [1, 2, 3, 4, 5];

// const search = (arr, item) => { 
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (element === item) {
//             return item;
//         }
//     }
// }
// console.log(search(arr, 13));

// const std_list = [
//   {
//     name: "Mehedi",
//     mark: 80,
//     dep: "CSE",
//   },
//   {
//     name: "Sakib",
//     mark: 70,
//     dep: "EEE",
//   },
//   {
//     name: "Tamim",
//     mark: 80,
//     dep: "CSE",
//   },
// ];
// const search = (arr, item) => { 
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (element.name === item) {
//             return element;
//         }
//     }
// }
// console.log(search(std_list, "Muuna"));

// console.log(arr.find((item)=> item===21))


// const std_list = [
//   {
//     name: "Mehedi",
//     mark: 80,
//     dep: "CSE",
//   },
//   {
//     name: "Sakib",
//     mark: 70,
//     dep: "EEE",
//   },
//   {
//     name: "Tamim",
//     mark: 80,
//     dep: "CSE",
//   },
// ];
// const result = std_list.find((item) => { 
//     // console.log(item);
//     const bool = item.dep === "CSE"
//     // console.log(bool);
//     return true;
// })

// console.log(result);

// console.log(arr.find((item) => item === 21))


// const search = (arr, cb) => { 
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];

//         const cb_result = cb(element);
//         if (cb_result) return element; 
//     }
// }
// const callback = (item) => { 
//     return item.dep === "EEE" && item.mark < 80;
// };
// const result = callback({
//   name: "Mehedi",
//   mark: 80,
//   dep: "CSE",
// });
// console.log(result);

// const result = search(std_list, callback);

// console.log(result);



// const arr = [1, 2, 3, 4];
// const myMap = (arr, cb) => {
//     const result = [];
//       for (let i = 0; i < arr.length; i++) {
//           const element = arr[i];
//           const cb_result = cb(element);
//           result.push(cb_result);
//       }
//     return result;
// }

// const result = myMap(arr, (item) => item * item)
// const result = arr.map((item) => item * item);


// console.log(result);
