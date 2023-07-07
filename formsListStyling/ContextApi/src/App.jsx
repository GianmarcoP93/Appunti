import { Clock } from "./Clock";
import React from "react";
import { LanguageContext } from "./LanguangeContext";

// immaginiamo di avere una selezione  di lingua all'interno della nostra app, dovremo racchiudere tutto all'intenro di un div
// e aggiungere la casella di selezione e poi salvare la selezione all'interno di uno state

class App extends React.Component {
  state = {
    language: "en", //default
  };

  //funzione per cambiare il language nello state
  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="en">ENGLISH</option>
          <option value="it">ITALIANO</option>
        </select>
        {/* dopo aver creato un file con create context (in questo caso in LanguageContext.js wrappiamo tutto ciò a cui vogliamo passare questa api 
          dentro il provider della variabile creata con createcontext). E vogliamo passare un valore al Provider che sarà il valore che condivideremo con
          tutti i componenti all'interno del provider */}
        <LanguageContext.Provider value={this.state.language}>
          <Clock />
        </LanguageContext.Provider>
      </>
    );
  }
}

export default App;
