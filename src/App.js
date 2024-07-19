import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/about';

function App() {
  return (
    <>  
      <Routes>     
        <Route path= "/" element={<About/>}/>
        <Route path= "/" element={<Skill/>}/>
        <Route path= "/" element={<Experience/>}/>
        <Route path= "/" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
