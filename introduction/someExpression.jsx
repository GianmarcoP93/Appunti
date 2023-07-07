//? Difference between JS and JSX

//!counter in JS:

//HTML
<div id="counter"></div>;
<button id="button">Increment counter</button>;

//JS
let counter = 0;
const counterElement = document.querySelector("#counter");
const button = document.querySelector("#button");
button.addEventListener("click", () => {
  counter += 1;
  counterElement.innerText = counter;
});

//!counter in JSX:

//HTML
<div>{counter}</div>;
<button onClick={handleCounterIncrement}>Increment counter</button>;

//JSX
function handleCounterIncrement() {
  setCounter(counter + 1);
}

////////////////////////////////////////////////////////////////////////////////////////////

//? Some example JSX
const name = "Gianmarco";
const header = <h1>Hello, {name}</h1>;

//////

const a = 18;
const b = 29;
const result = <span>The result is {a + b}</span>;

/////////

const sum = (a, b) => a + b;
const resultSum = <span>The result of the sum is {sum(19, 22)}</span>;

//? ogni volta che vuoi incorporare un'espressione nel codice JSX devi metterlo tra parentesi graffe,
//? e nelle parentesi graffe puoi mettere qualsiasi espressione valida (numero, valore immediato o numero immediato, può essere chiamata una funzione, può essere un espressione ecc...)
//! o può essere un codice JSX perchè il codice JSX viene trasferito a un'invocazione di una funzione
