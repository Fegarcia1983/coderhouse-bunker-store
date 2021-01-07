import NavBar from './components/navbar/NavBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/main/ItemListContainer';

function App() {
  return (
    <div className="App">
      < NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;