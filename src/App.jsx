import './App.css';
import { Header } from './Components/Header';
import { useTheme } from './Hooks/useTheme';
import { Hero } from './Components/Hero';

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
      <Hero />
    </main>
    </div>
    </>
  );
}

export default App;