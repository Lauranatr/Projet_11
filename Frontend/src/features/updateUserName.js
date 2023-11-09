import { setUpdateUserName } from "../features/profileSlice";

export const updateUserProfile = (newUsername) => async (dispatch) => {
  try {
    const userToken = localStorage.getItem("token"); // Obtenez le token d'utilisateur à partir du stockage local
    const response = await fetch("http://localhost:3001/api/v1/user-profile", {
      method: "PUT", // Utilisez la méthode PUT pour mettre à jour le nom d'utilisateur
      headers: {
        Authorization: `Bearer ${userToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newUsername }), // Envoyez le nouveau nom d'utilisateur
    });

    if (response.ok) {
      dispatch(setUpdateUserName(newUsername));
    }

    console.log("Réponse de la requête fetch :", response);
  } catch (error) {
    console.error(error);
  }
};