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
    document.title = "Keer op Keer";
  }

  render() {

    return (
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="full-width">
            <h1>Keer op Keer Solovariant</h1>
            <p>
              Keer op keer kan ook solo worden gespeeld. Dezelfde spelregels zijn van kracht, alleen wordt er nu met slechts vier dobbelstenen gespeeld (twee zwarte en twee met kruisjes). In totaal zijn er 30 worpen waarbij je kruisjes kunt aanvinken. Het doel is om zoveel mogelijk punten te scoren.
            </p>
          </div>
          <div className="playboard mx-auto mt-4">
            <div className="row">
              <div className="item green"></div>
              <div className="item green"></div>
              <div className="item green"></div>
              <div className="item yellow"></div>
              <div className="item yellow"></div>
              <div className="item yellow"></div>
              <div className="item yellow"></div>
              <div className="item center green"></div>
              <div className="item blue"></div>
              <div className="item blue"></div>
              <div className="item blue"></div>
              <div className="item orange"></div>
              <div className="item yellow"></div>
              <div className="item yellow"></div>
              <div className="item yellow"></div>
            </div>
            <div className="row">
              <div className="item orange"></div>
              <div className="item green"></div>
              <div className="item yellow"></div>
              <div className="item green"></div>
              <div className="item yellow"></div>
              <div className="item yellow"></div>
              <div className="item orange"></div>
              <div className="item center"></div>
              <div className="item red"></div>
              <div className="item blue"></div>
              <div className="item blue"></div>
              <div className="item orange"></div>
              <div className="item orange"></div>
              <div className="item green"></div>
              <div className="item green"></div>
            </div>
            <div className="row">
              <div className="item blue"></div>
              <div className="item green"></div>
              <div className="item red"></div>
              <div className="item green"></div>
              <div className="item green"></div>
              <div className="item green"></div>
              <div className="item green"></div>
              <div className="item center red"></div>
              <div className="item red"></div>
              <div className="item red"></div>
              <div className="item yellow"></div>
              <div className="item yellow"></div>
              <div className="item orange"></div>
              <div className="item green"></div>
              <div className="item green"></div>
            </div>
            <div className="row">
              <div className="item blue"></div>
              <div className="item red"></div>
              <div className="item red"></div>
              <div className="item green"></div>
              <div className="item orange"></div>
              <div className="item orange"></div>
              <div className="item blue"></div>
              <div className="item center blue"></div>
              <div className="item green"></div>
              <div className="item green"></div>
              <div className="item yellow"></div>
              <div className="item yellow"></div>
              <div className="item orange"></div>
              <div className="item red"></div>
              <div className="item blue"></div>
            </div>
            <div className="row">
              <div className="item red"></div>
              <div className="item orange"></div>
              <div className="item orange"></div>
              <div className="item orange"></div>
              <div className="item orange"></div>
              <div className="item red"></div>
              <div className="item blue"></div>
              <div className="item center blue"></div>
              <div className="item orange"></div>
              <div className="item orange"></div>
              <div className="item orange"></div>
              <div className="item red"></div>
              <div className="item red"></div>
              <div className="item red"></div>
              <div className="item red"></div>
            </div>
            <div className="row">
              <div className="item red"></div>
              <div className="item blue"></div>
              <div className="item blue"></div>
              <div className="item red"></div>
              <div className="item red"></div>
              <div className="item red"></div>
              <div className="item red"></div>
              <div className="item center yellow"></div>
              <div className="item yellow"></div>
              <div className="item orange"></div>
              <div className="item red"></div>
              <div className="item blue"></div>
              <div className="item blue"></div>
              <div className="item blue"></div>
              <div className="item orange"></div>
            </div>
            <div className="row">
              <div className="item yellow"></div>
              <div className="item yellow"></div>
              <div className="item blue"></div>
              <div className="item blue"></div>
              <div className="item blue"></div>
              <div className="item blue"></div>
              <div className="item red"></div>
              <div className="item center yellow"></div>
              <div className="item yellow"></div>
              <div className="item yellow"></div>
              <div className="item green"></div>
              <div className="item green"></div>
              <div className="item green"></div>
              <div className="item orange"></div>
              <div className="item orange"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;