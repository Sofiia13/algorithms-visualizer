import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ArrayGenerator } from "./components/ArrayGenerator";
import { Header } from "./components/Header";
import { DataStructurePage } from "./components/DataStructuresPage";

function App() {
  return (
    <div className="bg-[#fffffe] min-h-screen px-50 py-10">
      <Header />

      <Routes>
        <Route path="/" element={<ArrayGenerator />} />
        <Route path="/sorting" element={<ArrayGenerator />} />
        <Route path="/data-structures" element={<DataStructurePage />} />
      </Routes>
    </div>
  );
}

export default App;
