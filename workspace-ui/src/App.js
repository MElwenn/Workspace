import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/navbar/navbar.module";
import AppRouter from "./components/app-router/app-router.module"

function App() {

  let navigation = {
    active: "Editor"
  }

  return (
    <div className="App">

      <Router>
        <NavBar />
        <div>
          <AppRouter />
        </div>
      </Router>

    </div>
  );
}

export default App;