//CSS

//* un modo per creare del file css con react è creare un file css e imortarlo con la dicitura "import "./style.css" " nel file "main", ovvero il file che renderizza il file app nel HTML

//* le classi in react non si scriveranno con l'attributo "class" ma con il prop = "className"

//? un altro modo per poter utilizzare gli stili all'interno dell'applicazione è di dichiarare una costante con i vari attributi css all'interno del render:

export class Example extends React.Component {
  render() {
    const MyStyle = {
      backgroundColor: "#333",
      color: this.props.name ? "green" : "red", //in questo modo diciamo che se c'è il prop name impostiamo il colore sul green altrimenti sul red
      margin: "10px 20px",
      color: this.state.count < 5 ? "red" : "orange", //in questo modo al counter fino al num 5 il colore è red dopo il 5 è orange
    };

    return <div style={MyStyle}>Hello!</div>;
  }
}

//può essere sia dichiarato fuori che direttamente all'interno del div style:

export class Example1 extends React.Component {
  render() {
    return (
      <h1
        style={{
          backgroundColor: "#333",
          color: this.props.name ? "green" : "red", //in questo modo diciamo che se c'è il prop name impostiamo il colore sul green altrimenti sul red
          margin: "10px 20px",
          color: this.state.count < 5 ? "red" : "orange", //in questo modo al counter fino al num 5 il colore è red dopo il 5 è orange
        }}
      >
        Hello!
      </h1>
    );
  }
}

//!N.B: ci devono essere due parentesi graffe all'interno di style dentro jsx
