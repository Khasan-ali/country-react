import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { useTheme } from './Hooks/useTheme';
import { Home } from './Pages/Home';
import { Detailing } from './Pages/Detailing';

function App() {
  const [state,] = useTheme()

  if(state) {
        document.body.classList.add('countries-light-mode-body')
        document.body.classList.remove('countries-dark-mode-body')
  }else {
    document.body.classList.add('countries-dark-mode-body')
    document.body.classList.remove('countries-light-mode-body')
  }

  return (
    <>  
    <Header />
    <div className="container">
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home/:productName' element={<Detailing />} />
      </Routes>
    </main>
    </div>
    </>
  );
}

export default App;