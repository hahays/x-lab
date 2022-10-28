import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import SearchPage from "../SearchPage/SearchPage";
import SideMenu from "../SideMenu/SideMenu";
// import Routes from "../Routes/Routes";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <SideMenu />
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="address" element={<SearchPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
