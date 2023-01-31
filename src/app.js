/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// /* EXCUSES GENERATOR */ //
window.onload = () => {
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = onLoad();
  });

  const onLoad = () => {
    let who = ["El perro", "La abuela", "La tortuga", "Mi pajaro"];
    let what = ["se comió  mi tarea", "meó todo", "chocó", " se rompió"];
    let when = [
      "antes de clases",
      "todo el tiempo",
      "cuando termino",
      "durante mi almuerzo",
      "mientras juego"
    ];

    let whoIndex = Math.floor(Math.random() * who.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);
    return who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex];
  };
};
