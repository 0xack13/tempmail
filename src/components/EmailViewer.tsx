import React from 'react';
import { Email } from '../types';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import { downloadURL } from '../utils';

interface IEmailViewer {
  email: string;
  content: Email;
}

const EmailViewer: React.FC<IEmailViewer> = ({ email, content }) => {
  return (
    <div className="container mt-4">
      <div className="row d-flex text-white">
        <h3>{content.subject === "" ? "(no subject)" : content.subject}</h3>
        <span className="ml-auto"><Link to="/">Go Back</Link></span>
      </div>

      <div className="row d-flex text-white mt-2">
        <h5 className="text-secondary">{content.from}</h5>
        <p className="text-muted ml-auto">{content.date}</p>
      </div>


      <div className="row text-white mt-2">
        {ReactHtmlParser(content.body)}
      </div>

      {(content.attachments && content.attachments.length > 0) &&
        <React.Fragment>
          <hr className="row" style={{ color: "white", backgroundColor: "white" }} />
          <div className="text-white">
            {
              content.attachments.map((file, idx) => <p key={idx}><i className="fas fa-download" style={{color: "teal"}}></i> <a rel="noreferrer" target="_blank" href={downloadURL(email, content.id, file.filename)}>{file.filename}</a></p>)
            }
          </div>

        </React.Fragment>
      }
    </div>
  )
}


export default EmailViewer;
