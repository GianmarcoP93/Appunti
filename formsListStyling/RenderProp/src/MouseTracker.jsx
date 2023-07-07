//? Il termine "render prop" si riferisce a una tecnica per condividere il codice tra i componenti di React utilizzando un prop il cui valore è una funzione.

import React from "react";

export class MouseTracker extends React.Component {
  state = {
    position: [0, 0],
  };

  handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    this.setState({
      position: [x, y],
    });
  };
  render() {
    return (
      <div
        style={{
          width: "800px",
          height: "800px",
          border: "1px solid black",
          backgroundColor: "beige",
        }}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.children(this.state.position)}
        {/* qui stiamo renderizzando questo componente all'intenro del figlio di MouseTracker in app, se avessimo voluto renderizzarlo come prop avremmo dovuto usare "this.props.render", 
        e stiamo dando come argomento la position dentro lo state */}
      </div>
    );
  }
}

//!Context API
//? per passare un valore da un antenato a un discendente molto lontano o rendere un valore disponibile,
//? possiamo passare il valore come prop ad ogni discendente, ma questo ci porterebbe ad avere troppe prop, quindi un modo
//? per ottenere questo valore e avere il codice il più pulito possibile e non avere problemi con la manutenzione del codice
//? react fornisce L'API context che è una caratteristica che ci permette di fornire un singolo valore (o più valori) e
//? condividere questo valore tra tutti i componenti che vogliono accedervi, fintanto che fanno parte di uno specifico albero di componenti.
//? Quindi abbiamo un provider, che è un componente, che conterrà il valore che vorremo condividere, poi avremo tutti i componenti (all'interno della sottostruttura del provider)
//? che potranno accedere a questo valorew attraverso un componente di consumo.
//* Dobbiamo usare una funzione che viene esportata dalla libreria di react e si chiama "createContext".
//? la funzione createContext riceve un singolo parametro che è il valore predefinito che andremo ad assegnare se non viene passato alcun valore al componente provider

//* immagina un app che ha una funzione multilingua e l'utente può selezionare in quale lingua vuole usare l'applicazione e tutti i componenti che richiedono il rendering di testo
//* mostrerà il testo nella lingua corretta
