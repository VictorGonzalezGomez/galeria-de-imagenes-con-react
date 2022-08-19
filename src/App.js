import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";
import './App.css';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
       <Header title="mi galleria de imagenes"/>
       <CardsContainer/>
       <Footer/>
    </div>
  );
}

export default App;
