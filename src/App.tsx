import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import CreateUser from "./view/createUser.tsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<CreateUser/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
