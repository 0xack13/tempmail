import React, { useEffect } from 'react';
import EmailContainer from './EmailContainer';
import EmailList from './EmailList';

const Home = () => {
  useEffect(() => {document.title = "TempMail"});

  return (
    <div className="container">
      <EmailContainer />
      <EmailList />
    </div>
  )
}

export default Home;
