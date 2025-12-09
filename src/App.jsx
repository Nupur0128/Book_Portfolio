import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import About from "./Components/About"
import Author from "./Components/Author"
import TOC from "./Components/TOC"
import Reviews from "./Components/Review"
import BuyNow from "./Components/BuyNow"
import Home from "./Components/Home"
import Footer from "./Footer"

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
