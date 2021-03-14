import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/navbar/navbar.module";
import AppRouter from "./components/app-router/app-router.module"

function App() {

  return (
    <div className="App">

      <Router>
        <NavBar />
        <AppRouter />
      </Router>

    </div>
  );
}

export default App;
