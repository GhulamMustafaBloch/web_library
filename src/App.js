import './App.css';
import "./Responsive/Responsive.css"
import Header from './Header/Header';
import Home from './Home/Home';
import About from './Home/Contact/About/About';
import Contact from './Home/Contact/Contact';
import Galry from './Home/Contact/About/Galry/Galry';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/about' element ={<About/>} />
        <Route path='/contact' element ={<Contact/>} />
        <Route path='/galry' element ={<Galry/>} />
      </Routes>
    </Router>
  );
}
export default App;
