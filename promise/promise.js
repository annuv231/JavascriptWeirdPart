"use strict";

//----------x------x------- basic Promisess-------x--------x--------x

// const willGetDog = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// willGetDog
//   .then(() => {
//     console.log("yoooo we got dog");
//   })
//   .catch(() => {
//     console.log("oops no dog");
//   });

//2. -x-x-x-x-x-x-xx-....... returning promises from functions........-x-x-x-x-x-x-x

// const willGetDog = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if (rand < 0.5) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 5000);
//   });
// };
// // console.log(willGetDog);
// willGetDog()
//   .then(() => {
//     console.log("yoooo we got dog");
//   })
//   .catch(() => {
//     console.log("oops no dog");
//   });

//3.=======x=====x=====x Resolving/Rejecting value ========x---x-x-x-x-x-x-x-

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, Name: "Amlendra" },
          { id: 2, Name: "Ankush" },
          { id: 3, Name: "Penelope" },
        ],
        "/about": "this is about",
      };
      const data = pages[url];
      if (data) {
        resolve({ Status: 200, Data: data });
      } else {
        reject({ Status: 404 });
      }
    }, 3000);
  });
};
fakeRequest("/users")
  .then((res) => {
    console.log("Request worked");
    console.log("Status code", res.Status);
    console.log("Data:", res.Data);
  })
  .catch((res) => {
    console.log("request failed lol");
    console.log("Status code", res.Status);
  });
