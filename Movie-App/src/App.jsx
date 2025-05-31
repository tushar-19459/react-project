import "./css/index.css"
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NavBar from './Components/NavBar'
import { MovieProvider } from "./Context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar></NavBar>
      <main className="main-content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

      </main>
    </MovieProvider>
  )
}

export default App