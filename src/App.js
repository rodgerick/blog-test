import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Pages/Create";
import About from "./Pages/About";
import BlogDetails from "./Components/BlogDetails";
//import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Create">
              <Create />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
