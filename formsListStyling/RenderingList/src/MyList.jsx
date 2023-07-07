import React from "react";

export class MyList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.names.map((name, index) => (
            <li key={name + index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
//in questo modo riusciamo a renderizzare stringhe contenenti nel prop in App, dentro un array grazie al metodo map. Essendo che react ha bisogno di una key unica ad ogni suo elemento
//per monitorare l'aggiornamento e conseguentemente effettuare il rendering della pagina ad ogni modifica possiamo creare una key unica dando come prop key e sommando il name al index.

//* Spesso però dovremo utilizzare questo metodo con degli oggetti

export class MyObj extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              {todo.completed && <span> (Completed)</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

//in questo caso abbiamo creato un array di oggetti con il nome di "cose da fare" in App.jsx, abbiamo dato come prop "todos" l'oggetto creato (che abbia lo stesso nome è una coincidenza),
//e come key unica abbiamo dato l'id di ogni oggetto.
//Inoltre abbiamo creato un conditional rendering che, nel caso todo.completed è truthy (ricordiamo che nel caso fosse false non restituirebbe nulla) ci renderizza uno span con scritto "Completed"
