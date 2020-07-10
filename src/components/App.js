import React from 'react';
import Calculator from "./Calculator"
import SharedPanel from "./SharedPanel"
import io from 'socket.io-client';

// const IPAddr = "192.168.0.7";
// const socket = io("http://" + IPAddr + ":4000");
 const socket = io("https://simple-calc-server.herokuapp.com/");
class App extends React.Component {
  state = {sharedText: []};

  emitSocketEvent = (text) =>{
    socket.emit("sendMessageToServer", text);
  }

  componentDidMount(){
    socket.on("messageFromServer", (value)=>{
      let arrCalc = [...this.state.sharedText, value];
      if(arrCalc.length > 10){
        arrCalc.splice(0,1);
      }
      this.setState({sharedText: arrCalc});
    });
  }


  componentWillUnmount(){
    socket.emit("disconnect");
  }

  render(){

    return (
      <div className="container">
        <div className="row">
          <div className="col align-self-center">
            <Calculator emitEvent={this.emitSocketEvent}></Calculator>
          </div>
          <div className="col align-self-center">
            <SharedPanel displayText={this.state.sharedText}></SharedPanel>
          </div>
        </div>
      </div>

    )
  }
}

export default App;
