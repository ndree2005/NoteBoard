import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import NoteDetails from "./pages/NoteDetails.jsx";
import CreatePage from "./pages/CreatePage.jsx"; // <-- fix import

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetails />} />
      </Routes>
    </div>
  );
};

export default App;
