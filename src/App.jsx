import React,{Component} from "react";
import "./style.css"
import Nav from "./Components/Nav"
import Home from "./Components/Home" 
import Cards from "./Components/Cards";
import {data} from "./Components/Cards_data"
import Footer from "./Components/Footer"
export default  class App extends Component{
    render(){
        return(
            <>
            <Nav/>
            <Home/>
            <div className="cards_style" >
            {data.map(x=><Cards 
            imgSrc={x.imgSrc}
            alt={x.alt}
            heading={x.heading}
            p={x.desc}
            button={x.button}
            />)}
            </div>
            <Footer/>
            </>
        )
    }
    
}