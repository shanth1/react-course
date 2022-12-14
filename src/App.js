import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Page />
      <Footer />
    </div>
  );
};

export default App;
