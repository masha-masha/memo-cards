import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Study from "./features/study/StudyPage";
import WordsPage from "./features/words/WordsPage";

function App() {
 return (
  <>
   <BrowserRouter>
    <Header />
    <Routes>
     <Route path="/" element={<Study />} />

     <Route path="/words" element={<WordsPage />} />

     <Route path="*" element={<div>404</div>} />
    </Routes>
    <Footer />
   </BrowserRouter>
  </>
 );
}

export default App;
