import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Study from "./components/Study";
import Words from "./components/Words";

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" element={<Study/>} />

      <Route path="/words" element={<Words />} />


      <Route path="*" element={<div>404</div>} />
     </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
