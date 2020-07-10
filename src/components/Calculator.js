import React from "react";
import Button from "./Button";

class Calculator extends React.Component{
  arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  arrOps = ["Clear","Delete","+","-","/","*","%", "="];
  state = {text:"", invalid:"", res: ""};

  createButtons = (arr) => {

    return arr.map((item)=>{
      if(isNaN(item) && item.length === 1)
        return <Button key={item} displayText={item} addClass="btnOps" buttonClicked={this.performOperation}></Button>
      else
        return <Button key={item} displayText={item} buttonClicked={this.performOperation}></Button>
    });
  }

  performOperation = (btnPressed, isOP) =>{
    if(this.state.invalid === "")
    {
      switch(btnPressed){
        case "Clear":
          this.setState({text:"", invalid: "", res: ""});
          break;
        case "Delete":
          let typedtext = this.state.text;
          typedtext = typedtext.substring(0, typedtext.length-1);
          this.setState({text:typedtext, invalid: "", res: ""});
          break;
        case "=":
        // console.log(this.isOP(this.state.text.substring(this.state.text.lastIndexOf(" "), this.state.text.length).trim()));
        // console.log(this.state.text.substring(0,this.state.text.lastIndexOf(" ")));
          if(this.isOP(this.state.text.substring(this.state.text.lastIndexOf(" "), this.state.text.length).trim()))
            this.setState({text: this.state.text.substring(0,this.state.text.lastIndexOf(" ")), invalid: ""});

          let tokens;
          setTimeout(()=>{
            tokens = this.state.text.split(" ");
            for(var i=0;i<tokens.length;i++)
              tokens[i] = isNaN(tokens[i]) ? tokens[i] : Number(tokens[i]);

            try{
              // console.log();
              let temp = tokens.join(" ");
              this.props.emitEvent(temp + " = " + eval(temp));
              this.setState({text: "", res:(eval(temp)).toString() });
            }
            catch(ex){
              console.log(ex.toString());
            }

          },10)
          break;
        default:
          if(this.state.text === "" && isOP) this.setState({text:`0 ${btnPressed}`, invalid: ""});
          else {
            if(isOP && this.isOP(this.state.text.substring(this.state.text.lastIndexOf(" "), this.state.text.length).trim())  ){
             this.setState({text:`${this.state.text.substring(0,this.state.text.length-2)} ${btnPressed}`, invalid: ""});
            }
            else{
              // console.log(this.state.text);
              if(!isNaN(this.state.text.substring(this.state.text.length-1, this.state.text.length)) && !isOP)
                this.setState({text:`${this.state.text}${btnPressed}`, invalid: ""});
              else this.setState({text:`${this.state.text} ${btnPressed}`, invalid: ""});
            }
          }
          break;
      }
    }
    else{
      this.setState({text: this.state.invalid});
    }
  }

  isOP = (operator) => {
    if(operator === "+" || operator === "-" || operator === "*" || operator === "/" || operator === "%") return true;
    else return false;
  }

  render(){

    return(
      <div className="card outerCard">
        <div className="card-header">
          <textarea
            className="txtArea"
            placeholder=""
            rows="1"
            disabled
            value={this.state.text === "" ? this.state.res : this.state.text }
          ></textarea>
        </div>
        <div className="card-body">
          <div className="card-text">
            <div className="card mb-3 innerCard">
             <div className="row no-gutters">
               <div className="col-md-6">
                <div className="card-body">
                 {this.createButtons(this.arrNum)}
                </div>
               </div>
               <div className="col-md-6">
                 <div className="card-body">
                   {this.createButtons(this.arrOps)}
                 </div>
               </div>
             </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Calculator;
