import './App.css';
import Router from "./components/Router";
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Router/>
            <Footer/>
        </div>
    );
}

export default App;
