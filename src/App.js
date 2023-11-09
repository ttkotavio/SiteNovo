import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tinder from './pages/Tinder/Tinder'
import Projects from './pages/Projects/Projects';
import Lista from './pages/Lista/Lista'
import './global.css';



function App()
{
 return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/tinder' element={<Tinder />}/>
            <Route path='/misterio' element={<Projects />}/>
            <Route path='/lista' element={<Lista />}/>
        </Routes>
    </Router>

 );
}

export default App;