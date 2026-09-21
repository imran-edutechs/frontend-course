// foretch

// const arr = [2, 3, 4, 5, 6, 7];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }


// arr.forEach((val, i, arr) => {
//   console.log(val, i, arr);
// });

// console.log(arr.reverse());

// const prompt_ = "Summarize this article in three short bullet points.".trim();
// "Summarize this article in three short bullet points."
//  "This" 3







// const getTokenCount = (str) => { 
//     let token_count = 0;
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (char === " ") {
//         token_count++;
//       }
//     }

//     if (str !== "") {
//       token_count++;
//     }
//     return str.split(" ").length;
// }

// 8

// console.log(getTokenCount("klks f dsaf. sdfsd"));
// console.log(prompt_.split(" ").length)


// console.log(message.length);

// const dateTime = "20/9/2026T11:47:00 AM"

// console.log(dateTime.replace("/", "-").replace("AM", "PM"));


// const arr = [5,2,8,1,9] // [ 8 ,9]
// 1, 2, 5, 8, 9

// const sorted = []
// for (let i = 0; i < arr.length; i++) {
//     if ( arr[i]== null) {
//         continue;
//     }
//     let min_inx = i;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[min_inx] > arr[j] && i !== j && arr[j] != null) {
//           min_inx = j;
//         }
//     }
//     sorted.push(arr[min_inx])
//     arr[min_inx] = null;
// }
// console.log(sorted);

// console.log(arr.sort((a,b)=>b-a));



// // [5,null,8,null,9]

// /*
//     [1, 2]

//     // 2


// */



// const arr1 = [1, 11,99, 0, ]

// console.log(...arr1);
// console.log(Math.max(...arr1));



// const arr2 = [...arr1];

// arr2[0] = 3;

// console.log(arr1, arr2);



// const item = {
//     title: "Macbook m4",
//     price:1000,
// }

// const item2 = {...item};

// item2.title = "Nokia"
// console.log(item, item2);



// const sum = (...rest) => {
//     let result = 0;
//    for (let i = 0; i < rest.length; i++) {
//       result += rest[i];
//    }
//    return result
// }

// console.log(sum(10, 5, 2));


// const mark = [10, 5]

// const mark1 = mark[0]
// const mark2 = mark[1];

// const [mark1, mark2, ...others] = [10, 5,1,2,3,4];

// console.log(mark1, mark2, others);


const { name, roll } = { name: "Imran", roll: 11, mark: 100 }

console.log(name, roll);
