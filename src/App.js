import logo from './logo.svg';
import './App.css';
import Ejemplo from './components/Ejemplo';
import HooksPersonalizados from "./components/HooksPersonalizados";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Ejemplo/> */}
        <HooksPersonalizados/>
      </header>
    </div>
  );
}

export default App;
