//per utilizzare le prop dobbiamo dichiararle come valore della funzione

const HelloWorld = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

//quindi il risultato sarà "Hello, " " " con il nome settato nella prop name all'intenro di app. Ma possiamo anche destrutturare direttamente il prop che ci interessa

const HelloWorld2 = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};

//in questo modo prendiamo solo il prop che ci interessa utilizzare ed il codice sarà più leggibile.
//possiamo anche dare un valore di default predefinito

const HelloWorld3 = ({ name = "Gianmarco" }) => {
  return <h1>Hello, {name}</h1>;
};

//cosi facendo se ci sarà una prop "name" all'intenro del nostro componente helloworld renderizzato in app useremo il valore di quella stringa, altrimenti useremo il valore di default
