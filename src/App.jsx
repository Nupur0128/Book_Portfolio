import { Route, Routes } from "react-router-dom"
import Navbar from "./CommonComponent/Navbar"
import About from "./pages/About"
import Author from "./pages/Author"
import TOC from "./pages/TOC"
import Reviews from "./pages/Review"
import BuyNow from "./pages/BuyNow"
import Home from "./pages/Home"
import Footer from "./CommonComponent/Footer"

//toaster
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/author" element={<Author />} />
        <Route path="/toc" element={<TOC />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/buynow" element={<BuyNow />} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  )
}

export default App
