import "./App.css";
// import Contact from "./component/ContactPage";
// import About from "./component/AboutPage";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import ProductPage from "./component/ProductPage";

function App() {
  return (
    <div className=" bg-slate-100">
      <Navbar />
      {/* <Contact /> */}
      {/* <About /> */}
      <ProductPage />
      <Footer />
    </div>
  );
}

export default App;
