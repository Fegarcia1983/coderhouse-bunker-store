import NavBar from './components/navbar/NavBar'
import { ItemListContainer } from './components/main/item-list-container/ItemListContainer'
import { ItemDetailContainer } from './components/main/item-detail-container/ItemDetailContainer'
import {CartContext} from './contexts/CartContext'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
      <Router>
        <CartContext.Provider value={[]}>
          < NavBar />
            <Switch>
              <Route path='/products/:id' component={ ItemDetailContainer }/>
              <Route path='/category/:id' component={ ItemListContainer }/>
              <Route path='/' component={ ItemListContainer } />
            </Switch>
        </CartContext.Provider>
      </Router>
    </div>
  );
}

export default App;