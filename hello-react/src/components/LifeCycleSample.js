import React, { Component } from "react";

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    };

    myRef = null; //ref를 설정할 부분

    constructor(props) {
        super(props);
        console.log("constructor");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps");
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color };
        }
        return null;
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextProps, nextState);
        return nextState.number % 10 !== 4;
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };

    getSnapshotBeforeUpdate(preProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        if (preProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(preProps, prevState, snapshot) {
        console.log("componentDidUpdate", preProps, prevState);
        if (snapshot) {
            console.log("업데이트되기 직전 색상 ", snapshot);
        }
    }

    render() {
        console.log("render");
        const style = {
            color: this.props.color,
        };
        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={(ref) => (this.myRef = ref)}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;
