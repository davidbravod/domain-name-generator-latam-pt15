/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

let pronouns = ["our", "the", "a", "your"];
let adjectives = ["great", "big", "little", "awesome"];
let nouns = ["jogger", "racoon", "dog", "cat"];
let extensions = [".com", ".org", ".info", ".io"];

let newLi;
let text;
let addingLi = document.querySelector("#dominios-lista ol");

window.cambioDominio = function cambioDominio() {
  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          console.log(pronouns[i] + adjectives[j] + nouns[k] + extensions[l]);
          newLi = document.createElement("li");
          text = document.createTextNode(
            pronouns[i] + adjectives[j] + nouns[k] + extensions[l]
          );
          newLi.appendChild(text);
          addingLi.appendChild(newLi);
        }
      }
    }
  }
};
