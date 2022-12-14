import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Page from "./components/Page/Page";

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
