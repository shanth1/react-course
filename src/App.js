import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

export default App;
