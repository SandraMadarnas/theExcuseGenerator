/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// /* EXCUSES GENERATOR */ //
window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["El perro", "Mi mamá", "Mi tortuga", "Mi pájaro"];
  let what = ["come", "meado", "aplastado", "roto"];
  let when = [
    "antes de la clase",
    "justo ahora",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras rezaba"
  ];
  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex];
};