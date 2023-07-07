//! eventi

//* Gli eventi base di HTML (in HTML) si scrivono tutti in lowercase, mentre in jsx in camelCase
//es:

//?HTML:
//*<button onclick="handleButtonClick()">Click Me!</button>

//?JSX:
<button onClick={handleButtonClick}>Click Me!</button>;

//? le differenze sono nel nome dell'evento (Click con la lettera maiuscola) e nella funziona che nel primo caso va passata come stringa e lanciata nel secondo va messa tra parentesi graffe
