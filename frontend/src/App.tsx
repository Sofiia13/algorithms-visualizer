import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { SortingPage } from "./components/sorting/SortingPage";
import { Header } from "./components/Header";
import { DataStructurePage } from "./components/dataStructures/DataStructuresPage";
import { Footer } from "./components/Footer";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="bg-[#fffffe] min-h-screen lg:px-50 md:px-20 px-5 p-10">
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/sorting" replace />} />
        <Route path="/sorting" element={<SortingPage />} />
        <Route path="/data-structures" element={<DataStructurePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
