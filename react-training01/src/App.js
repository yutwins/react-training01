import { useState, useCallback } from "react";
import "./App.css";
// import { ChildArea } from "./ChildArea";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

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
export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}

