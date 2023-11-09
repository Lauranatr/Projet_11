import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/argentBankLogo.png';
import { useSelector, useDispatch } from "react-redux";
import { setSignOut } from '../features/userSlice';
import User from '../assets/user.webp'



const Header = () => {
  const { token } = useSelector((state) => state.auth);
  const { dataUser } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setSignOut());
  };

    return (
        <header>
        <nav className='cont-nav'>
           <Link to="/">
              <img className='logo-header' alt='Logo de Argent Bank' src={Logo} />
           </Link>

           {token && (
        <Link className="main-nav-item" to="/profile">
          <img src={User} alt="User" />
          {dataUser.userName}
        </Link>
      )}
      <Link
        className="main-nav-item"
        to={token ? "/" : "/signin"}
        onClick={handleLogout}
      >
        {token ? "Sign In" : "Sign Out"}
      </Link>
        </nav>
     </header>
  )
}


export default Header;