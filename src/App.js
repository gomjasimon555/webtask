import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Featured from './components/Featured';
import Home from './components/Home';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <Featured/>
      <Contact/>
    </div>
  );
}

export default App;
