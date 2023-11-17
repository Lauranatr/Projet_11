import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../features/profileSlice";
import EditButton from "../components/EditButton";
import Account from "../components/Account";

const User = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const token = localStorage.token;

  async function fetchUserProfile() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
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
        }
      );

      if (response.status === 200) {
        const userProfile = await response.json();
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
          <EditButton />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
          />
        <Account
      title="Argent Bank Checking (x6712)"
      amount="$10,928.42"
      description="Available Balance"
        />
          <Account
        title="Argent Bank Checking (x8349)"
        amount="$184.30"
        description="Current Balance"
          />
      </main>
    </div>
  );
};

export default User;
