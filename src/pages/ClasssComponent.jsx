
import React from "react";
import BaseHoc from "../hoc/BaseHOC";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Phalgun",
            age: 20,
        };

        console.log("Constructor: ");
    }

    componentDidMount() {
        console.log("Component Did Mount: ");
    }

    componentDidUpdate() {
        console.log("Component Did Update?");
    }

    componentWillUnmount() {
        console.log("Component Did Unmount");
    }

    render() {
        console.log("Render: ");

        return (
            <div>
                <p>This is Class Component</p>
            </div>
        );
    }
}

export default BaseHoc(ClassComponent);