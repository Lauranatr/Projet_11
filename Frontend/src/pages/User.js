import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../features/profileSlice";

const User = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const token = localStorage.token;

  async function fetchUserProfile() {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: 0,
          message: "string",
          body: {
            id: "string",
            email: "string",
          },
        }),
      });
  
      if (response.status === 200) {
        const userProfile = await response.json();
        // Assurez-vous que les propriétés correspondent exactement à ce que le serveur renvoie
        const { email, userName, firstName, lastName } = userProfile.body;
        dispatch(setProfile({ email, userName, firstName, lastName }));
      } else if (response.status === 401) {
        console.error("Échec de la récupération du profil de l'utilisateur");
      }
    } catch (error) {
      console.error(
        "Erreur lors de la récupération du profil de l'utilisateur",
        error
      );
    }
  }

  useEffect(() => {
    
    fetchUserProfile();

  }); 

  return (
    <div>
      <main className="profile">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {profile.firstName} {profile.lastName} !
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default User;
