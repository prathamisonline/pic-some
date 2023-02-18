import "./App.css";
import Header from "./Component/Header";
import Cart from "./Pages/Cart";
import Images from "./Pages/Images";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Context";
function App() {
  return (
    <ContextProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Images />}></Route>
          </Routes>
          <Routes>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
