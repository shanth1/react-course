import "./App.css";
import Header from "./components/Header";
import LeftBlock from "./components/LeftBlock";
import Feed from "./components/Feed";
import RightBlock from "./components/RightBlock";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <LeftBlock />
      <Feed />
      <RightBlock />
    </div>
  );
};

export default App;
