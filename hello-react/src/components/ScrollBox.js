import React, { useRef, Component } from "react";

const ScollBox = () => {
    const box = useRef(null);
    const style = {
        border: "1px solid black",
        height: "300px",
        width: "300px",
        overflow: "auto",
        position: "relative",
    };
    const innerStyle = {
        width: "100%",
        height: "650px",
        background: "linear-gradient(white,black)",
    };
    const scrollToBottom = () => {
        const { scrollHeight, clientHeight } = box;
        box.scrollTop = scrollHeight - clientHeight;
    };
    return (
        <>
            <div style={style} ref={box}></div>
            <div style={innerStyle}></div>
        </>
    );
};

// class ScollBox extends Component {
//     render() {
//         const style = {
//             border: "1px solid black",
//             height: "300px",
//             width: "300px",
//             overflow: "auto",
//             position: "relative",
//         };
//         const innerStyle = {
//             width: "100%",
//             height: "650px",
//             background: "linear-gradient(white,black)",
//         };
//         return (
//             <>
//                 <div
//                     style={style}
//                     ref={(ref) => {
//                         this.box = ref;
//                     }}
//                 ></div>
//                 <div style={innerStyle}></div>
//             </>
//         );
//     }
// }

export default ScollBox;
