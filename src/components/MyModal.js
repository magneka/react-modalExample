import React from 'react'
import { Modal, Button } from "react-bootstrap";

export const MyModal = (props) =>  {
 
  return (
    <>  
    dd   
      <Modal show={true} onHide={props.myModalFuncs.handleCancel}>

        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Woohoo, you're reading this text in a modal!<br/>

          <b>
          {props.myModalFuncs.string1}
          </b>
        
        </Modal.Body>

        <Modal.Footer>
          
          <Button variant="secondary" onClick={props.myModalFuncs.handleCancel}>
            Close
          </Button>

          <Button variant="primary" onClick={props.myModalFuncs.handleOK}>
            Save Changes
          </Button>

        </Modal.Footer>

      </Modal>
    </>
  );
}
