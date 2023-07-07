//! State

state = {
  data: new Date(),
};

setInterval(() => {
  setState({
    data: new Data(),
  });
}, 1000);

//* setState() = metodo che vogliamo chiamare ogni volta che il nostro State ha bisogno di evolversi, in questo caso ogni secondo lo state avrà una nuova data (orario) e react ne sarà a conoscenza

//! Il metodo setState() notifica a React che lo stato di un componente deve essere aggiornato ma l'aggiornamento non è sincrono, non succede subito

//? setState() può essere chiamato in due modi:

//* setState({ name: Gianmarco });

//* setState((state) => ({ state.name: Gianmarco }));

//il secondo è più utile quando hai piu chiamate setState che dipendono da l'un l'altro, quindi la chiamata che vuoi che passa per prima userai la 2 opzione perchè
//nel primo caso verranno raggruppate da React emesse in maniera più ottimizzata secondo lui

//! Operatore nullo

state = {
  count: props.initialValue ?? 0, //<-- inizierà a contare dal numero definito dalla prop o da 0 se non è definito nella prop
};

<Counter initialValue={10} incrementBy={20} timeOut={3000} />; // <-- in questo caso initialValue è impostato a 10 quindi inizierà da 10.

setInterval =
  (() => {
    setState((state) => {
      return {
        counter: state.count + (props.incrementBy ?? 1), //se ci sarà una props incrementBy con un valore verrà impostato quel valore altirmenti 1
      };
    });
  },
  props.timeOut ?? 1000); //se ci sarà una props timeout con un valore verrà impostato quel valore altirmenti 1000

//* Possiamo anche impostare dei dati di default in modo di usare quelli se i props sono mancanti:

state = {
  count: props.initialValue,
};

setInterval =
  (() => {
    setState((state) => {
      return {
        counter: state.count + props.incrementBy, //se ci sarà una props incrementBy con un valore verrà impostato quel valore altirmenti quello di default
      };
    });
  },
  props.timeOut); //se ci sarà una props timeout con un valore verrà impostato quel valore altirmenti quello di default

Counter.defaultProps = {
  timeOut: 1000,
  initialValue: 0,
  incrementBy: 1,
};
