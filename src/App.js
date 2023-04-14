import Navbar from "./components/Navbar";
import Homepage from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
      <div>
          <Navbar className="w-screen"></Navbar>
          <div className="flex flex-col items-center justify-center ">
              <div className="my-48">
                  <Homepage></Homepage>
              </div>
              <div className="my-48">
                  <About></About>
              </div >
              <div className="my-48 mb-80">
                  <Contact></Contact>
              </div>
          </div>
      </div>
  );
}

export default App;
