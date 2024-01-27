import Counter from "./components/Counter";
import Info from "./components/Info";
import React, { useState } from "react";
import Average from "./components/Average";
function App() {
    // return <Counter />;
    // return <Info />;
    return <Average />;
}
// const App = () => {
//     const [visible, setVisble] = useState(false);
//     return (
//         <div>
//             <button
//                 onClick={() => {
//                     setVisble(!visible);
//                 }}
//             >
//                 {visible ? "숨기기" : "보이기"}
//             </button>
//             <hr />
//             {visible && <Info />}
//         </div>
//     );
// };

export default App;
