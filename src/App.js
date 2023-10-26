import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Test App" />
      <div className="container">
        <TextForm heading="Enter Your Text To Analyze"/>
      </div>
    </>
  );
}

export default App;
