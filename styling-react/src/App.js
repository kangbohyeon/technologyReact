import "./App.css";
import React, { Component } from "react";
import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";
import StyledComponent from "./StyledComponent";
class App extends Component {
    render() {
        return (
            <div>
                {/* <SassComponent /> */}
                {/* <CSSModule /> */}
                <StyledComponent />
            </div>
        );
    }
}

// function App() {
//     return (
//         <div className="App">
//             <header>
//                 <img src={logo} className="logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

export default App;
