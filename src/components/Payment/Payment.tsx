import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Payment: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>                                                            {/* sil */}
      <Button variant="primary" onClick={handleShow} className=' mt-5 pt-5'>
        Ödeme Yap
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ödeme Yap</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="/payment" method="post">
            <div className="form-group">
              <label htmlFor="amount">Miktar</label> {/* for yerine htmlFor */}
              <input type="number" id="amount" name="amount" placeholder="Ödeme Tutarı" />
            </div>
            <div className="form-group">
              <label htmlFor="card-number">Kart Numarası</label> {/* for yerine htmlFor */}
              <input type="text" id="card-number" name="card-number" placeholder="Kart Numarası" />
            </div>
            <div className="form-group">
              <label htmlFor="expiration-date">Son Kullanma Tarihi</label> {/* for yerine htmlFor */}
              <input type="text" id="expiration-date" name="expiration-date" placeholder="MM/YY" />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label> {/* for yerine htmlFor */}
              <input type="text" id="cvv" name="cvv" placeholder="CVV" />
            </div>
            <Button type="submit" variant="primary" >
              Ödeme Yap
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Payment;
