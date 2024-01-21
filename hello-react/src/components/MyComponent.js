import React, { Component } from "react";
import ProTypes from "prop-types";
// const MyComponent = ({ name, favoriteNumber,children }) => {
//     return (
//         <div>
//             안녕하세요, 제 이름은 {name}입니다. <br />
//             children 값은 {children}입니다. <br />
//             제가 좋아하는 숫자는 {favoriteNumber}입니다.
//         </div>
//     );
// };

class MyComponent extends Component {
    render() {
        const { name, children, favoriteNumber } = this.props;
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                children 값은 {children}입니다. <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: "기본 이름",
};

MyComponent.ProTypes = {
    name: ProTypes.string,
    favoriteNumber: ProTypes.number.isRequired,
};
export default MyComponent;
