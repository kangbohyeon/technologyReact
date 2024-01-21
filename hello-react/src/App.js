import React, { useRef, Component } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPracticeClass from "./components/EventPracticeClass";
import EventPracticeFunction from "./components/EventPracticeFunction";
import ValidationSample from "./components/ValidationSample";
import ScollBox from "./components/ScrollBox";
import IterationSample from "./components/IterationSample";
import LifeCycleSample from "./components/LifeCycleSample";
import ErrorBoundary from "./components/ErrorBoundary";
// function App() {
//     const name = "리액트";

//     return <div className="react">{name}</div>;
// }
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    state = {
        color: "#000000",
    };
    handleClick = () => {
        this.setState({
            color: getRandomColor(),
        });
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color} />
                </ErrorBoundary>
            </div>
        );
    }
}

// const App = () => {
//     return <MyComponent />;
// };
// const App = () => {
//     return (
//         // <MyComponent name="react" favoriteNumber={1}>
//         //     리액튼
//         // </MyComponent>
//         // <Counter></Counter>
//         // <Say />
//         // <EventPracticeFunction />
//         // <ValidationSample />
//         // <ScollBox />
//         <IterationSample />
//     );
// };
export default App;
