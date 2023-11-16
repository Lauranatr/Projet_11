import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../features/updateUserName";
import { setUpdateUserName } from "../features/profileSlice";


export default function EditButton() {
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile);
  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const [newUserName, setNewUserName] = useState(profile.userName);
  const dispatch = useDispatch();

  const handleEdit = async (e) => {
    e.preventDefault()
    if (!newUserName) {
      setError("Le champ ne peut pas être vide");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: newUserName,
          }),
        }
      );

      if (response.status === 200) {
        dispatch(setUpdateUserName(newUserName));
        setIsEditing(false);
      } else {
        console.error("Erreur de l'envoie du nouveau nom d'utilisateur");
      }
    } catch (error) {
      console.error("Erreur de requête", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <section className="edit-content">
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <div className="input-wrapper">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input disabled type="text" value={firstName} readOnly />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input disabled type="text" value={lastName} readOnly />
          </div>
          <div className="edit-buttons">
            <button className="buttons">
              Save
            </button>
            <button className="buttons" onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="form-button">
          <button className="button-eum" onClick={() => setIsEditing(true)}>
            Edit User Name
          </button>
        </div>
      )}
    </section>
  );
}
