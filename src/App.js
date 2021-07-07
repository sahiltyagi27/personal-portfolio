import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Content from './Content';
import Navbar from './Navbar';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/personal-portfolio' component={Content} exact />
        <Route path='/about' component={About} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
