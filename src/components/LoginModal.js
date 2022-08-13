import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'reactstrap';

const LoginModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-link" id="btn-link" onClick={handleShow}>
        Client Login
      </Button>

      <Modal show={show} onHide={handleClose}>
            <div class="md-form mb-5 logForm">
                    <form>
                        <div className="form-group">
                            <label for="nameInput">Name</label>
                            <input type="text" name="name" className="form-control" id="nameImput" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label for="emailImput">Name</label>
                            <input name="email" type="email"  className="form-control" id="emailImput" placeholder="email@domain.com" />
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>
            </div>
      </Modal>
    </>
  );
}

export default LoginModal;