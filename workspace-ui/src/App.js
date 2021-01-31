import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar/navbar.module";
import Office from "./components/office/office.module";
import Editor from "./components/editor/editor.module";
import Reservation from "./components/reservation/reservation.module";

function App() {

  let navigation = {
    active: "Editor"
  }

  return (
    <div className="App">
      <NavBar/>
      <Office/>
      {navigation.active === "Editor" && <Editor />}
      {navigation.active === "Reservation" && <Reservation />}
    </div>
  );
}

export default App;
