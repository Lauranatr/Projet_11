
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from '../features/updateUserName';


export default function EditButton() {
    const token = useSelector((state) => state.auth.token);
    const profile = useSelector((state) => state.profile);
    const firstName = useSelector((state) => state.profile.firstName);
    const lastName = useSelector((state) => state.profile.lastName);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState('');
    const [newUserName, setNewUserName] = useState(profile.userName);
    const dispatch = useDispatch();

    const handleEdit = async (e) => {
        e.preventDefault();
        if (!newUserName) {
            setError(newUserName ? '' : 'Le champ ne peut pas être vide');
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
                const responseData = await response.json();
                console.log(responseData)
                dispatch(updateUserProfile({ response: responseData}));
                setIsEditing(false);
            } else {
                console.error("Erreur de l'envoie du nouveau nom d'utilisateur");
            }
        } catch (error) {
            console.error(
                "Erreur de requête",
                error
              );
        };
    }
    
    return ( 
        <section className='edit-content'>
            {isEditing ? (
                <form onSubmit={handleEdit}>
                    <div className='input-wrapper'>
                        <label htmlFor="userName">User Name</label>
                        <input type="text"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                        />
                    </div>
                    <div className=''>
                        <label htmlFor="firstName">First Name</label>
                        <input disabled type="text" 
                        value={firstName}
                        readOnly
                        />
                    </div>
                    <div className=''>
                        <label htmlFor="lastName">Last Name</label>
                        <input disabled type="text" 
                        value={lastName}
                        readOnly
                        />
                        <button type="submit">Save</button>
                    </div>
                        </form>
            ) : (

                    <div className='form-button'>
                        <button className='' onClick={() => setIsEditing(true)}>
                            Edit User Name 
                        </button>

                    </div>
            )}
        </section>


    )
};




