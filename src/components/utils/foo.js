import React from "react";
import "./style.css"

// Either as a Class
export default class FooClass extends React.Component {
  render() {
    return <div className="foo">Foo</div>;
  }
}

// Or as a function
export default FooFunction = (props) => <div className="foo">Foo</div>;