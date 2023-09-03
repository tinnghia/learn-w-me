import "./AppStyles.css";

import { Cards } from "./Cards";
import { CategoryList } from "./CategoryList";
import { ContextProvider } from "./Context";

export default function App() {
  return (
    <ContextProvider>
      <>
        <div className="header">
          <a href="#default" className="logo">
            <img alt="Envato Market" className="header_logo" src="leanwithme.png" />
          </a>
          <div className="header-right">
            <a href="#about">Admin</a>
            <a href="#about">Sign In</a>
          </div>
        </div>
        <CategoryList />
        <div>
          <Cards />
        </div>
      </>
    </ContextProvider>
  );
}
