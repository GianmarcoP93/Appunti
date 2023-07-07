//! Step da seguire:

//? nella cartella component creare i componenti della pagina

//? nella cartella pages creare le pages

//? assemblare tutto in App.jsx

//? renderizzare nell'html in main.jsx

//** in App,jsx importare "import { Route, Routes } from "react-router-dom";" (serve per cambiare pagina senza ricaricare la pagina)

//** in main.jsx prendere l'elemento by id della pagina index.html e rendirizzare i componenti di App:

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

//**Per creare un'applicazione con percorsi di più pagine, iniziamo prima con la struttura del file.

// All'interno della src cartella, creeremo una cartella denominata pagescon diversi file:

// src\pages\:

// Layout.js
// Home.js
// Blogs.js
// Contact.js
// NoPage.js
// Ogni file conterrà un componente React molto semplice.

//! Utilizzo di base

// Ora useremo il nostro Router nel nostro index.js file.

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//! Esempio spiegato

//**  Avvolgiamo prima il nostro contenuto con <BrowserRouter>.

//* Quindi definiamo il nostro <Routes>. Un'applicazione può avere più <Routes>. Il nostro esempio di base ne usa solo uno.

//* <Route>s può essere nidificato. Il primo <Route> ha un path di "/"" e renderizza il Layout componente.

//* I <Route> nidificati ereditano e si aggiungono alla route padre. Quindi il path del blog è combinato con il genitore e diventa "/blogs".

//* Il routh Home del componente non ha un percorso ma ha un index attributo. Ciò specifica questa route come route predefinita per la route padre, che è "/"".

//* Impostare il path in "*" fungerà da catch-all per qualsiasi URL non definito. Questo è ottimo per una pagina di errore 404.
