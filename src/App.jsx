import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Minus from "./components/minus/Minus";
import Plus from "./components/plus/Plus";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="counter">
                <Plus />
                <Hero />
                <Minus />
            </div>
        </div>
    );
}

export default App;
