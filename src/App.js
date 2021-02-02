import NavBar from './components/navbar/NavBar'
import { ItemListContainer } from './components/main/item-list-container/ItemListContainer'
import { ItemDetailContainer } from './components/main/item-detail-container/ItemDetailContainer'
import { Context } from './contexts/CartContext'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContainer } from './components/main/cart-container/CartContainer';



function App() {
  return (
    <div className="App">
      < Router >
        < Context >
          < NavBar />
            < Switch >
              < Route path='/products/:id' component={ ItemDetailContainer } />
              < Route path='/category/:id' component={ ItemListContainer } />
              < Route path='/cart' component={ CartContainer } />
              < Route path='/' component={ ItemListContainer } />
            </ Switch >
        </ Context >
      </ Router >
    </div>
  );
}

export default App;