import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./Admin";
import "./AppStyles.css";
import { ChunkProvider, ContextProvider } from "./Context";
import Home from "./Home";

export default function App() {
  return (
    <BrowserRouter>

      <ContextProvider>
        <ChunkProvider>
        <>
          <div className="header">
            <a href="/" className="logo">
              <img alt="Envato Market" className="header_logo" src="leanwithme.png" />
            </a>
            <div className="header-right">
              <a href="/admin">Admin</a>
              <a href="/signin">Sign In</a>
            </div>
          </div>
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/admin" Component={Admin}></Route>
          </Routes>
        </>
        </ChunkProvider>
      </ContextProvider>
    </BrowserRouter>
  );
}
