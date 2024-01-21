import React, { useState, useRef } from "react";
import "../css/ValidationSample.css";

const ValidationSample = () => {
    const [password, setPassword] = useState("");
    const [click, setClick] = useState(false);
    const [validated, setValidated] = useState(false);
    const input = useRef(null);
    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    const handleButtonClick = () => {
        setClick(true);
        setValidated(password === "0000");
        input.current.focus();
    };

    return (
        <div>
            <input
                ref={input}
                type="password"
                value={password}
                onChange={handleChange}
                className={click ? (validated ? "success" : "failure") : ""}
            />
            <button onClick={handleButtonClick}>검증하기</button>
        </div>
    );
};

export default ValidationSample;
