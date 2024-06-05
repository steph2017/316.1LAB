import "./styles.css";

const mainEl = document.querySelector("main"); // selects main element from html
mainEl.style.backgroundColor = "var(--main-bg)"; // sets color to the variable color
const header = document.createElement("h1"); //creates an H1 element
mainEl.appendChild(header); //adds header under main element
header.textContent = "DOM Manipulation"; //adds text to h1 element
mainEl.classList.add("flex-ctr"); //adds class to main element
