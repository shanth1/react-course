import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Body
                messagesData={props.messagesData}
                dialogsData={props.dialogsData}
            />
            <Footer />
        </div>
    );
};

export default App;
