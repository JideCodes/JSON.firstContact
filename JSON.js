const body = document.querySelector("body");
const newH1 = document.createElement("h1");
let newObj = {
  name: "Jide" ,
  age: 23,
  isAlive: true
};
newH1.textContent = JSON.stringify(newObj);
body.append(newH1);
