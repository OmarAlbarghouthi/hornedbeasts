import React from "react";
import HornedBeast from "./HornedBeast";
import Data from "./Data.json";

class Main extends React.Component{
    render(){
        return(
            <>
            {
                Data.map((element, index) =>{
                    return(
                        <HornedBeast

                        image_url = {element.image_url}
                        title = {element.title}
                        description = {element.description}
                        keyword = {element.keyword}
                        horns = {element.horns}
                        key = {index}

                        
                        />
                    )
                })
            }
            </>
        )
    }
}
export default Main;