import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./Data.json";
// import Forms from "./Forms";


class Main extends React.Component{
    render(){
        console.log(this.props);
        return(
            <>
            {
                data.map((element, index) =>{
                    return(
                        <HornedBeast

                        image_url = {element.image_url}
                        title = {element.title}
                        description = {element.description}
                        keyword = {element.keyword}
                        horns = {element.horns}
                        key = {index}

                        beastButton = {this.props.beastButton}
                        />
                    )
                })
            }
            </>
        )
    }
}
export default Main;