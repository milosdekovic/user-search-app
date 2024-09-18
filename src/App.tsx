import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-7xl p-5 mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user/:id" element={<User />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
