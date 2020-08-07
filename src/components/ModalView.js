
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Input } from 'reactstrap';
import Timeline from './Timeline';
import './ModalView.css';


const ModalView = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(props.isClicked);
  const  [ date, setDate ] = useState();
  const closeBtn = <button className="close" onClick={ (e)=>props.handleModalClick(e) }>&times;</button>;
  return (
      
  <div>
    <Modal isOpen={modal} className={className} >
      <ModalHeader close={closeBtn}>{props.activeUser.real_name} Timeline</ModalHeader>
      <ModalBody>
        <FormGroup>
            <Label for="exampleDate">Search By Date</Label>
            <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
            onInput={ (e)=>{ setDate(e.target.value) } }
            />
        </FormGroup>
        <Timeline  activeUser = { props.activeUser } getRandomColor={ props.getRandomColor } date={date} /> 
      </ModalBody>
    </Modal>
  </div>
);
}

export default ModalView;