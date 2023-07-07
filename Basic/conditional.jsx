//! conditional rendering

//? in React gli operatori condizionali restituiscono l'ultimo valore vero, se tutte le espressioni sono truthy o il primo valore falso, ma react è abbatsanza intelligente da non rendere nulla.

1 && 2; //returns 2

0 && 2; //returns 0

1 == 2 && "Hello!"; //returns false

2 === 2 && "Hello!"; //returns "Hello!"

//* ricordiamo che i valori falsy sono: 0, undefined, una stringa vuota, null e ovviamente "false". I valori truthy sono principalmente tutto il resto.

//* Quando vuoi passare un prop e vuoi solo che il suo valore sia vero puoi farlo senza dare nessun valore. React è abbastanza intelligente da capire che vuoi che questa prop sia impostata su vero.
//*es:

//(HelloWorld page)

// let page=()=>{
//     return (
//         <>
//         {exampleProp && <h1>Hello World<h1/>}; //se è vero ci aspettiamo "Hello World" perchè è l'ultimo valore vero
//         </>
//     )
// };

//(App page)
<HelloWorld exampleProp={true} />; //qui specifico la prop in true
<HelloWorld exampleProp />; //anche senza specificare il true react capirà che è true perchè è presente tra i props

//Ovviamente non è sbagliato in nessuno dei due modi, nel primo è solo più facilmente leggibile

//* Per impostare invece una prop falsa non c'è una scorciatoia ma dobbiamo specificarlo o dobbiamo non scrivere quella Prop

<HelloWorld exampleProp={false} />; //false
<Helloworld />; //false

// ctrl + P = shortcut per far apparire l'input della tavolozza di ricerca file.

//! N.B: ciò che è js viene scritto tra parentesi graffe nelle prop, passandoli con le graffe li passi con il loro tipo {false}, sarà booleano {11} sarà number, per le stringhe metti semplicemente il contenuto in apici

<HelloWorld exampleProp={0} />; //questo sarà falso, quindi non reinderizzerà "HelloWorld" ma renderizzerà su schermo lo 0, perchè alcune volte potremmo probabilmente volere mostrare il valore 0 all'interno della nostra applicazione
//per ovviare a questo problema nella nostra page possiamo scrivere questo:

//? {!!exampleProp && <h1>Hello World<h1/>} <- il primo punto esclamativo farà flippare il valore in true (dato che era falso a causa dello 0 del prop), il secondo punto escalamativo farà riflippare in false, in questo caso sarà semplicemente falsy  e non 0

//! Possiamo anche utilizzare l'operatore ternario:

<div>
  {
    //? if
    props.name ? (
      <h1>Hello, {props.name}!</h1> //?  ? = then
    ) : (
      <h1>Hello World</h1>
    ) //?   : = else
  }
</div>;

// il primo è if, il ? è il then, il : è l'else

//! una maniera più esplicativa è impostare una sorta di if con i punti esclamativi:

<div>
  {props.name && <h1> Hello, {props.name}</h1>}
  {!props.name && <h1>Hello world!</h1>}
</div>;

//* se il props name è impostato quindi tutti valori sono truthy verrà ritornato Hello, {props.name} (ultimo valore truthy)

//* se il props name non è impostato (!props.name) e quindi tutti i valori sono truthy (perchè abbiamo dichiarato il punto escalamtivo prima di props quindi se non è impostato)
//* ritornerà Hello World (ultimo valore truthy)
