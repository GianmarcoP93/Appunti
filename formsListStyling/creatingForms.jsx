//* per tracciare lo stato dell'input che l'utente sta immettendo all'interno della nostra applicazione puoi usare i moduli (Forms).

const { createRef } = require("react");

//* in react i moduli (forms) possono essere implementati in due modi: utilizzando componenti controllati o componenti non controllati.

//? componenti controllati: i componenti controllati non mantnegono uno state interno al suo contenuto, ma si affida all'elemento genitore per mantenere questo state.
//?                         richiederà al componente genitore di fornirgli il valore corrente e notificherà al componente genitore quando l'utente sta tentando
//?                         di modificare questo valore che viene mostrato all'interno dell'input, e spetterà al genitore decidere cosa fare con l'input dell'utente (salvarlo, scartarlo, ecc.)
//!                         Il componente controllato mostra solo i dati ma gli possiede, riceve dal genitore i dati che sta mostrando all'utente.

//? componente non controllato: mantiene i dati nel suo state interno, può notificare al genitore un cambiamento ma non si affiderà al genitore per farnirgli un valore

//un componente non controllato è il modo in cui normalmente funzionano gli input HTML

//! quando utilizzi componenti controllati dovrai fornire sia il valore, sia un evento sia l'input che chiamerà ogni votla che un utente tenta di modificare il valore di un input.

//? Componente controllato:

const LoginComponent = () => {
  state = {
    username: "",
    password: "",
    remember: false, //per salvare il value di un checkbox o di qualunque input che non abbia un input di testo, checkbox accetta true (check) o false (non checkato)
  };

  handleInputChange = (event) => {
    const name = event.target.name; // estraggo il nome del target dell'evento
    const value = event.target.value; // estraggo il valore del input (il testo), conta solo se non è una checkbox
    const type = event.target.type; //estraggo il type del input (testo, password, checkbox ecc)
    const checked = event.target.checked; //ci interessa solo se è un checkbox

    setState({
      [name]: type === "checkbox" ? checked : value, //  mettendo [name] indico il nome dell'input che sta ricevendo l'evento e associo il value (variabile dichiarata sopra).
      //  se il type è "checkbox" prendi l'input del checked altrimenti prendi il value dell'input

      // in questo modo con un singolo gestore di eventi siamo in grado di gestire tutti gli input

      // [name] prenderà il name dell'input ("username", "password", "rememmber" ecc) a seconda di quale input ha attivato l'evento e aggiornerà lo state username o password perchè avranno lo stesso nome
    });
  };

  //funzione per resettare lo state
  handleResetState = () => {
    setState({
      username: "",
      password: "",
      remember: false,
    });
  };

  //ora faremo qualcosa per stampare nella console del browser l'input ogni volta che si aggiorna (ovveor ogni volta in cui scriviamo o mettiamo il check)

  // componentDidUpdate(){
  //   console.log(state);
  // }

  return (
    <>
      <h1>My Form</h1>

      <button onClick={handleResetState}>Reset</button>
      {/* button per resettare lo state */}

      <input
        name="username"
        value={state.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        value={state.username}
        onChange={handleInputChange}
      />
      <input
        name="remember"
        type="checkbox"
        checked={state.remember}
        onChange={handleInputChange}
      />
      {/* per vedere se un input checkbox ha il check la parola chiave per controllare il check del prop è checked, che si aspetterà di ricevere true o false */}
    </>
  );
};

//? componente non controllato

// mentre un componente controllato si affidano al loro componente genitore per dare loro il valore che devono visualizzare e avvisano il genitore quando deve avvenire un cambiamento,
// un componente non controllato tiene traccia del proprio valore da solo e non ha bisogno di notificare il cambiamento al componente principale
// quindi il genitore non ha bisogno di passare prop al componente non controllato nè ha bisogno di allegare un gestore di eventi all'evento onChange.
// Se il genitore vuole accedere al valore di un componente non controllato, dovrà farlo accedendo direttamente all'elemento DOM che rappresenta il componente non controllato, quindi
// dovrà trovare un modo per accedere direttamente a questo valore.

//se vogliamo implementare un modulo utilizzando componenti non controllati, dovremo usare il tag <form> </form>

const UncontrolledForm = () => {
  //i refs sono un modo per interagire e accedere direttamente ai componenti, in modo che possiamo accedere ai loro valori e anche cambiarli. Bisogna importare createRef da react
  formRef = createRef();

  handleFormSubmit = (event) => {
    event.preventDefault();

    //per accedere agli elementi del form submit dobbiamo utilizzare "elements". Quando il target è un modulo, possiamo accedere a ogni input all'interno del modulo stesso utilizzando il nome dell'input
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };

  handleFormPrefill = () => {
    formRef.current.elements.username.value = "Gianmarco";
    formRef.current.elements.password.value = "1234";
    formRef.current.remember.checked = true;
  };

  return (
    <div>
      <h3>My uncontrolled Form</h3>

      <form onSubmit={handleFormSubmit} ref={formRef}>
        <input name="username" />
        <input name="password" type="password" />
        <input name="remember" type="checkbox" />
        <button type="submit"> Login </button>{" "}
        {/* ogni volta che abbiamo un button di type submit trigghererà l'evento "onSubmit". Un button all'interno di un form è di default di tipo submit  */}
        <button type="reset"> Reset </button>
        {/* ogni volta che abbiamo un button di type reset il modulo ritorna ai suoi valori predefiniti, ovvero campi vuoti o i vlori predefiniti (defaultValue) degli input specificati nei prop (che è qualcosa di specifico di React) */}
        <button type="button"> Prefill</button>
      </form>
    </div>
  );
};
