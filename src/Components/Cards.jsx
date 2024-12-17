import React,{Component} from "react";
export default class Cards extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
        <div className="cards_outer">
            <div id="cards">
                <img src={this.props.imgSrc} alt={this.props.alt} />
                <div className="cont">
                   <h1>{this.props.heading}</h1>
                   <p>{this.props.p}</p>
                   <a href="">See Terms</a>
                   <button>{this.props.button}</button>
                </div>
            </div>           
        </div>
         </>
        )
    }
}