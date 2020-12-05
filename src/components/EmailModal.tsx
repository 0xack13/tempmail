import React, { useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { customEmailModal } from '../store';
import Modal from 'react-bootstrap/Modal';

interface IEmailModal {
  handler: (t?: string) => void;
}

const EmailModal: React.FC<IEmailModal> = ({ handler }) => {
  const show = useRecoilValue(customEmailModal);
  const hide = useResetRecoilState(customEmailModal);

  const [email, setEmail] = useState<string>("");
  const [domain, setDomain] = useState<string>("1secmail.com");
  const [error, setError] = useState(false);

  const invalidName = ["abuse", "webmaster", "contact", "postmaster", "hostmaster", "admin"]

  const onSubmit = (email: string, domain: string) => {
    email = email.trim()

    if (email !== "" && !invalidName.includes(email.toLowerCase())) {
      handler(`${email}@${domain}`)
      hideModal()
    } else {
      setError(true)
    }
  }

  const hideModal = () => {
    setEmail("");
    setDomain("1secmail.com");
    setError(false)
    hide();
  }

  return (
    <Modal show={show} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title className="text-white">Custom Email</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {error && <p className="text-danger">Invalid name.</p>}
        <div className="text-white">
          <div className="form-group">
            <label htmlFor="custom-email">Email</label>
            <input type="text" value={email} className="form-control input-black" id="custom-email" onChange={(e) => setEmail(e.target.value)} />
            <small className="form-text text-muted">Invalid names: abuse, webmaster, contact, postmaster, hostmaster, admin.</small>
          </div>

          <div className="form-group">
            <label htmlFor="custom-email-select">Domain</label>
            <select id="custom-email-select" className="form-control custom-email-select" value={domain} onChange={(e) => setDomain(e.target.value)}>
              <option value="1secmail.com">1secmail.com</option>
              <option value="1secmail.org">1secmail.org</option>
              <option value="1secmail.net">1secmail.net</option>
              <option value="wwjmp.com">wwjmp.com</option>
              <option value="esiix.com">esiix.com</option>
            </select>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <button className="btn btn-success text-center" onClick={() => onSubmit(email, domain)} >Add</button>
      </Modal.Footer>
    </Modal>
  )
}

export default EmailModal;
