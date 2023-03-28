import './App.css';
import { StateContext } from './store/StateContext';
import Input from './components/Input';
import ShowMedicine from './components/ShowMedicine';
import Cart from './components/Cart';

function App() {
  return (
    <StateContext>
      <div className="App">
     <h1>Inventr Management</h1>
     <Input/>
     <Cart/>
     <ShowMedicine/>
    </div>
    </StateContext>
    
  );
}

export default App;
