import React from 'react';

class SharedPanel extends React.Component {
  displayAllCalculations = ({ displayText }) =>{
    return displayText.map((item)=>{
      return <div key={item}>{item}</div>
    })
  }

  render(){

    return (
      <div className="card broadcastCard">
        <div className="card-header">
          Shared Panel
        </div>
        <div className="card-body broadcastText">
          {this.displayAllCalculations(this.props)}
        </div>
      </div>

    )
  }
}

export default SharedPanel;
