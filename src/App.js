
import './App.css';
import API from './components/api'
import Header from './components/Header'
import Shop from './components/shop'


// import Example from './components/carrousel'
function App() {
  return (
    <div className="App">
     <Shop></Shop>
     <Header></Header>
     <API></API>
    
    </div>
  );
}

export default App;
