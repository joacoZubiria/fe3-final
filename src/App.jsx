import {Routes, Route} from 'react-router-dom'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
