import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
    render(){
        return(
            <>
            <HornedBeast catName = "soso" catImg = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"/>
            <HornedBeast catName = "lolo" catImg = "https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552_square.jpg"/>
            </>

)
    }
}
export default Main;