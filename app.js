const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //   console.log(document.body);
  // to get a random number from 0 to 3
  const randonNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randonNumber];
  color.textContent = colors[randonNumber];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
