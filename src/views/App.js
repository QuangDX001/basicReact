import logo from './logo.svg';
import './App.scss';
import DemoCompo from './Example/DemoCompo';

/**
 * 
 * 2 components: class components / function components(functions, arrow) 
 * 
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>

        {/* <DemoCompo></DemoCompo> */}

        <DemoCompo />
      </header>
    </div>
  );
}

export default App;
