import React from "react";
import { LanguageContext } from "./LanguangeContext";

const Strings = {
  en: {
    CURRENT_TIME: "Current time is: ",
  },
  it: {
    CURRENT_TIME: "L'ora attuale è: ",
  },
};

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  //per accedere al valore del Provider dobbiamo usare la componente di consumo
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {/* quando usi un consumatore devi passare un prop di rendering come figlio, quindi devi passare una funzione
        che riceverà il valore condiviso dal context e restituirà cosa vogliamo rendere quando eseguiamo il rendering del component
        (quindi potremmo rendere un div contenente l'ora attuale*/}
          {(language) => {
            return (
              <div>
                {/* qui mettiamo il nostro oggetto strings creato poco sopra, diamo language come hciave (valore della fuznione) e current_time è la chiave dell'oggetto che ha
                come valore le stringhe tradotte */}
                {Strings[language].CURRENT_TIME}
                {this.state.date.toLocaleTimeString()}
              </div>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
