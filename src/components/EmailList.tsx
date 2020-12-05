import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { inbox, tempMail } from '../store';
import { checkTempMailbox } from '../utils';
import EmailTable from './EmailTable';

const EmailList = () => {
  const email = useRecoilValue(tempMail);
  const [currInbox, setInbox] = useRecoilState(inbox);

  useEffect(() => {
    const interval = setInterval(() => {
      checkTempMailbox(email).then(m => setInbox(m));
    }, 5000)

    return () => clearInterval(interval);
  })

  return <EmailTable list={currInbox} />
}

export default EmailList;
