import "./App.css";
import { ArrayGenerator } from "./components/ArrayGenerator";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="bg-[#fffffe] min-h-screen px-50 py-10">
      <Header />
      <ArrayGenerator />
    </div>
  );
}

export default App;
