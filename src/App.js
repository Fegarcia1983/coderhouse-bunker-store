import NavBar from './components/navbar/NavBar'
import { ItemListContainer } from './components/main/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      < NavBar />
      < ItemListContainer greeting={"SOY LA PROP 'GREETING' IMPORTADO Y RENDERIZADO"} />
    </div>
  );
}

export default App;