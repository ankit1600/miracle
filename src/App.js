import "./App.css";
// import Contact from "./component/ContactPage";
import About from "./component/AboutPage";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className=" bg-slate-100">
      <Navbar />
      {/* <Contact /> */}
      <About />
      <Footer />
    </div>
  );
}

export default App;
