import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { useRecoilValue } from 'recoil'
import { tempMail, inbox } from '../store'
import { Email } from '../types';
import { getSingleEmail } from '../utils';
import EmailViewer from './EmailViewer';

const Inbox: React.FC<RouteComponentProps> = (props) => {
  const inboxList = useRecoilValue(inbox);
  const email = useRecoilValue(tempMail);

  const [emailContent, setEmailContent] = useState<Email>({} as Email)

  useEffect(() => {
    document.title = "Inbox | TempMail"

    const id = new URLSearchParams(props.location.search).get("id")
    if (id === null || id === "") {
      props.history.push("/")
      return
    }

    const emailId = inboxList.find(x => x.id.toString() === id);
    if(emailId === undefined) {
      props.history.push("/")
      return
    }

    getSingleEmail(email, id).then(e => setEmailContent(e));
  }, [props.location.search, props.history, email, inboxList])

  return <EmailViewer content={emailContent} email={email} />
}

export default Inbox;
