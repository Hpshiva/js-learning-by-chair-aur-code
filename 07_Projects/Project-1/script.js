const boxs = document.querySelectorAll(".box");
// console.log(boxs);

// boxs.forEach((item) => {
//   //   console.log(item);
//   item.addEventListener("click", function (e) {
//     // console.log(e);
//     console.log(e.target);
//     if (e.target.id === "white") {
//       document.body.style.backgroundColor = "white";
//     }
//     if (e.target.id === "red") {
//       document.body.style.backgroundColor = "#FB2C36";
//     }
//     if (e.target.id === "blue") {
//       document.body.style.backgroundColor = "#2B7FFF";
//     }
//     if (e.target.id === "pink") {
//       document.body.style.backgroundColor = "#F6339A";
//     }
//   });
// });

const colors = {
  white: "white",
  red: "#FB2C36",
  blue: "#2B7FFF",
  pink: "#F6339A",
};

boxs.forEach((item) => {
  item.addEventListener("click", (e) => {
    const color = colors[e.target.id];
    if (color) document.body.style.backgroundColor = color;
  });
});
