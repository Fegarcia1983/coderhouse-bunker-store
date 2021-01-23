import NavBar from './components/navbar/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ItemListContainer } from './components/main/item-list-container/ItemListContainer'
import { ItemDetailContainer } from './components/main/item-detail-container/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <Router>
        < NavBar />
          <Switch>
            <Route path='/products/:id' component={ ItemDetailContainer }/>
            <Route path='/products/:id' component={ ItemListContainer }/>
            <Route path='/' component={ ItemListContainer } />
          </Switch>
      </Router>
    </div>
  );
}

export default App;