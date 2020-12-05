import React from 'react';
import { useHistory } from 'react-router-dom';

const Navbar: React.FC = () => {
  const history = useHistory()

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark" style={{backgroundColor: "#333333"}}>
        <span className="navbar-brand mb-0 h1 mx-auto" style={{color: "#CDDC39", cursor: "pointer"}} onClick={() => history.push("/")}>TempMail</span>
      </nav>
    </div>
  )


}

export default Navbar;