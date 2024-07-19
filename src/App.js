import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path= "/" element={<about/>}/>
        <Route path= "/" element={<skill/>}/>
        <Route path= "/" element={<experience/>}/>
        <Route path= "/" element={<contact/>}/>
      </Routes>
    </>
  );
}

export default App;
