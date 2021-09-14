import React from "react";
import {Button,Modal} from 'react-bootstrap/';
import dataArray from './Data.json'


class BeastModel extends React.Component{

  render(){
    
    
    
    let imgUrl =<img src={this.props.animal.image_url} alt="" width ={475}/> 


    return(
        <>
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>name:{this.props.animal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> {imgUrl}{this.props.animal.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>
        </>
    )

}
}
export default Modal;