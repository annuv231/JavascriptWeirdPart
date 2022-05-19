"use strict";

// ---------------x--- Fetch-------x------------------x
//fetch always return promises
// fetch("https://swapi.dev/api/planets")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`Status code: ${res.status}`);
//       //throw new error will trigger .catch() method
//     }
//     res.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log("OOPs something went wrong");
//     console.log(err);
//   });

// --------------------- Chaining fetch request-----------
fetch("https://swapi.dev/api/planets")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Status code: ${res.status}`);
      //throw new error will trigger .catch() method
    }
    return res.json();
  })
  .then((data) => {
    for (let planet of data.results) {
      console.log("Name:", planet.name, "tempreture:", planet.climate);
    }
    console.log(data);
  })
  .catch((err) => {
    console.log("OOPs something went wrong");
    console.log(err);
  });
