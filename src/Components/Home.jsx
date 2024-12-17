import React,{Component} from "react"
export default class Home extends Component{
    render(){
        return(
            <>
               <div id="home">
                   <div className="content">
                      <h1>Start your BK® order.</h1>
                      <button className="order"><i class="fa-solid fa-bag-shopping"></i> Order Pickup</button>
                      <button className="delivery"><i class="fa-solid fa-motorcycle"></i> Order Delivery</button>
                   </div>
                   <div className="image">
                     <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/992ab9282f7352ad6d92ce74d86446c8ad758336-800x450.png?w=1125&q=90&fit=max&auto=format" alt="" />
                   </div>
               </div>
            </>
        )
    }
}