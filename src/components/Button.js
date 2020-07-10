import React from "react";

class Button extends React.Component{
  render(){
    return(
        <button
          className={`btn btn-secondary ${this.props.addClass !== undefined ? this.props.addClass : ''}`}
          onClick={()=>this.props.buttonClicked(this.props.displayText, (this.props.addClass !== undefined ? true : false))}
        >
          {this.props.displayText}
        </button>
    )
  }
}

export default Button;
