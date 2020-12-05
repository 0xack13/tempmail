import React from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { customEmailModal, inbox, tempMail } from '../store';
import { deleteTempEmail, getTempMail } from '../utils';
import EmailInput from './EmailInput';
import EmailModal from './EmailModal';

const EmailContainer = () => {
  const [currentEmail, setCurrentEmail] = useRecoilState(tempMail);
  const resetInbox = useResetRecoilState(inbox);
  const setCustomEmailModal = useSetRecoilState(customEmailModal);

  const getAnotherEmail = (customEmail?: string) => {
    deleteTempEmail(currentEmail);
    resetInbox()

    if(customEmail !== undefined) {
      setCurrentEmail(customEmail)
    } else {
      getTempMail().then(e => {
        setCurrentEmail(e)
      })
    }
  }

  const deleteHandler = () => {
    if(window.confirm('Are you sure you wish to delete this email?')) {
      deleteTempEmail(currentEmail);
      getAnotherEmail();
    }
  }

  return (
    <div className="container text-center mt-2 mb-2 email-container">
      <div className="mt-2 mb-2">
        <h4 className="text-white">Your Temporary Email Address</h4>

        <EmailInput email={currentEmail} />

        <div className="mt-2">
          <button className="btn btn-success mr-4" onClick={() => getAnotherEmail()}>Get New Email</button>
          <button className="btn btn-warning mr-4" onClick={() => setCustomEmailModal(true)}>Custom Email</button>

          <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>

          <EmailModal handler={getAnotherEmail} />
        </div>
      </div>
    </div>
  )
}

export default EmailContainer;
