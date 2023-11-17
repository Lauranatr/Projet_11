import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/argentBankLogo.webp";
import { useSelector, useDispatch } from "react-redux";
import { setSignOut } from "../features/userSlice";
import User from "../assets/user.webp";

const Header = () => {
  const token = useSelector((state) => state.auth.token);
  const dataUser = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setSignOut({ token }));
  };

  return (
    <header>
      <nav className="cont-nav">
        <Link to="/">
          <img className="logo-header" alt="Logo de Argent Bank" src={Logo} />
        </Link>

        {token && (
          <Link className="sign-nav" to="/profile">
            <img src={User} alt="User" />
            {dataUser.userName}
          </Link>
        )}
        <Link
          className="sign-nav"
          to={token ? "/" : "/signin"}
          onClick={() => {
            if (token) {
              dispatch(setSignOut());
              handleLogout();
            }
          }}
        >
          {token ? "Sign Out" : "Sign In"}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
