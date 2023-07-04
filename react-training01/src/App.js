import { useState, useCallback } from "react";
import "./App.css";
// import { ChildArea } from "./ChildArea";
// import { InlineStyle } from "./components/InlineStyle";
// import { CssModules } from "./components/CssModules";
// import { StyledJsx } from "./components/StyledJsx";
// import { StyledComponents } from "./components/StyledComponents";
// import { Emotion } from "./components/Emotion";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";

// レンダリングについて
// export default function App() {
//   console.log("App");
//   const [text, setText] = useState('');
//   const [open, setOpen] = useState(false);

//   const onChangeText = (e) => setText(e.target.value);

//   const onClickOpen = () => setOpen(!open)

//   const onClickClose = useCallback(() => setOpen(false), [setOpen]);

//   return ( 
//     <div className="App">
//       <input value={text} onChange={onChangeText} />
//       <br/>
//       <br/>
//       <button onClick={onClickOpen}>表示</button>
//       <ChildArea open={open} onClickClose={onClickClose} />
//     </div>
//   )
// }

// さまざまなCSSの当て方
// export default function App() {
//   return (
//     <div className="App">
//       <InlineStyle />
//       <CssModules />
//       <StyledJsx />
//       <StyledComponents />
//       <Emotion />
//   );
// }

// ルーティングについて
export default function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/page1/*" 
            element={
              <Routes>
                <Route path="/" element={<Page1 />} />
                <Route path="/detailA" element={<Page1DetailA />} />
                <Route path="/detailB" element={<Page1DetailB />} />
              </Routes>
            }
          />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}
