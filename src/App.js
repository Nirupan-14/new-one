
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import Questions from './Components/Questions';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Services/>
      <Questions/>
      <Footer/>
    </div>
  );
}

export default App;
