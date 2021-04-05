import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import  propTypes from "prop-types";
import { render } from '@testing-library/react';

export const Window_modal_question = (props) => {  
    const {mensaje,question:setQuestion} = props;
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () =>{ 
    
    
    setShow(true);}
  useEffect(() => {
    handleShow();

  }, []);

  const handleQuestionTrue = () => {
      setQuestion(true);
      handleClose();

  }
const handleQuestionFalse = () => {
  setQuestion(false);
  handleClose();
}
 // const resultModal =  (
   return (
<>
      
    <div className="">
      
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
            
            </Modal.Header>
            <Modal.Body>{mensaje}</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleQuestionTrue}>
                     Si 
            </Button>
            <Button variant="primary" onClick={handleQuestionFalse}>
                     No 
            </Button>
            
            </Modal.Footer>
        </Modal>
      </div>
    </>
  );
 // render(resultModal);
  Window_modal_question.propTypes= {
    mensaje: propTypes.isRequired, 
   question: propTypes.isRequired,
}


}

export default Window_modal_question;