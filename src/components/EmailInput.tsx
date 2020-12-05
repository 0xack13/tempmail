import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const EmailInput: React.FC<{ email: string }> = ({ email }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
  }

  return (
    <div className="row">
      <div className="d-flex justify-content-center mx-auto">
        <input type="text" className="form-control email-input" style={{backgroundColor: "black", color: "white", borderColor: "black"}} value={email ? email : ""} readOnly />
        <OverlayTrigger placement="right" overlay={
          <Tooltip id="tooltip-right">Copy to clipboard.</Tooltip>
        } >
          <button className="btn btn-warning ml-2" style={{backgroundColor: "#CDDC39", borderColor: "#CDDC39"}} onClick={copyToClipboard}><i className="fas fa-copy" style={{fontSize: "18px"}}></i></button>
        </OverlayTrigger>
      </div>
    </div>
  )
}

export default EmailInput;
