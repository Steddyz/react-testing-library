// import { useEffect, useState } from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState("");

//   const onClick = () => {
//     setToggle((prev) => !prev);
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setData({});
//     }, 1000);
//   }, []);
//   return (
//     <div>
//       <h1 data-testid="value-element">{value}</h1>
//       {toggle === true && <div data-testid="toggle-element">toggle</div>}
//       {data && <div style={{ color: "red" }}>data</div>}

//       <h1>Hello world</h1>
//       <button data-testid="toggle-btn" onClick={onClick}>
//         Click me
//       </button>
//       <input
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="input value"
//       />
//     </div>
//   );
// }

// export default App;

export const App = () => {
  return (
    <BrowserRouter>
      <Link data-testid="main-link" to="/">
        Home
      </Link>
      <Link data-testid="about-link" to="/about">
        About
      </Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};
