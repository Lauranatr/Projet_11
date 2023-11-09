import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSignIn } from "../features/userSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLoginEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const dataUser = await response.json();
        localStorage.setItem("token", dataUser.body.token);
        navigate("/profile");
      } else {
        setErrorMsg("Identifiant ou mot de passe incorrect!");
      }
    } catch (error) {
      setErrorMsg("Erreur dans l'identifiant ou dans le mot de passe");
      console.error("Connexion impossible: erreur ID ou MDP", error);
    }
  };

  return (
    <main className="dark">
      <section className="sign-in-content">
        <form className="signin-form" onSubmit={handleLoginEvent}>
          <h1>Sign In</h1>
          <div className="input-wrapper">
            <label htmlFor="username">Email </label>
            <input
              type="text"
              id="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">Remember me</label>
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
          </div>
          <div className="error"></div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
