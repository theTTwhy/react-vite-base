import React, { Component } from "react";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state: 0,
    };
  }

  componentDidMount() {
    // set title on page
    document.title = "Qwixx";
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="text-3xl font-bold underline">
             Hallo dit is een test
          </div>
        </div>
      </div>
    );
  }
}

export default Index;