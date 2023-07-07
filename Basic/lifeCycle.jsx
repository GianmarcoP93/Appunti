//! Ciclo di vita di un componente

//? Ogni componente che creiamo e che utilizziamo ha 3 fasi nel suo ciclo di vita:

//* 1) Fase di montaggio: è la fase del ciclo di un componente quando il compoennte viene aggiunto per la prima volta all'albero di component;
//*                    quindi inizia con la creazione del componente stesso e termina dopo che il componente è stato renderizzato per la prima volta.

//* 2) Fase di aggiornamento: è la fase di rendering, quindi ogni volta che un componente deve eseguire nuovamente il rendering di se stesso, passa attraverso un ciclo di aggiornamento.
//*                        ogni volta che un componente deve effettuare il ri-rendering di se stesso, passa attraverso un ciclo di aggiornamento. Questo ciclo ha 3 metodi:

//?                         1) shouldComponentUpdate: metodo facoltativo che react chiama ogni volta che viene implementato e può restituire solo true o false. Ci consente di decidere se
//?                                                   un ciclo di aggiornamento deve effettivamente essere eseguito o se non vogliamo che alcuni componenti vengano aggiornati.
//?                                                   ShouldComponentUpdate ha accesso sia allo state corrente e props e allo state e props successivi perchè vengono passati come parametri di
//?                                                   ShouldComponentUpdate stesso.

//?                         2) Render: questo è il metodo che viene chiamato ogni volta che un componente deve effettuare il rendering, sia che sia la prima volta o per tutte le volte

//?                         3) componentDidUpdate: metodo opzionale che possiamo implementare in qualsiasi momento il componente ha terminato la afse di rendering di una fase di aggiornamento.
//?                            Quindi dopo ogni rendering, durante la fase di aggiornamento, dopo che il componente ha eseguito nuovamente il rendering, possiamo utilizzare il metodo compoenntDidUpdate
//?                            per eseguire alcune operazioni che potrebbero richiedere qualche ulteriore aggiornamento all'interno del nostro componente.**

//                              let test = ()=> {
//                                              fetchUser(){
//                                                           /*____*/
//                                                                      }

//                               componentDidUpdate(prevProps, prevState){
//                                   if (props.userId !== prevPropos.userId){
//                                       fetchUser()
//                                        }
//                                     }
//                                   }

//prevProps contiene i valori dell'ggetto props che avevamo prima dell'aggiornamento, mentre prevState contiene il valore precedente dello state, quindi il contenuto dello state prima dell'aggiornamento del componente.

//* 3) Fase di smontaggio: è un gruppo di operaizoni che vengono chiamate ogni volta che il componente viene distrutto, viene rimosso dall'albero dei componenti.
//*                        Questo accade, ad esempio, ogni volta che un componente viene reso in modo condizionale e il predicato non è più soddisfatto.
