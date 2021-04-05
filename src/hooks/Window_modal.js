import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import  propTypes from "prop-types";

export const Window_modal = (props) => {  
    const {mensaje} = props;
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    handleShow();
    setTimeout(() => {
        handleClose();
     
    }, 4000);
  }, []);

  

  return (
<>
      
    <div className="">
      
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
            
            </Modal.Header>
            <Modal.Body>{mensaje}</Modal.Body>
            <Modal.Footer>
            
            
            </Modal.Footer>
        </Modal>
      </div>
    </>
  );
  Window_modal.propTypes= {
    mensaje: propTypes.isRequired, 
   
}
}

export default Window_modal;