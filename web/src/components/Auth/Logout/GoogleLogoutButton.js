import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = '131774183577-cdoa6o6ilvatkvjrd08vfit17qu0plds.apps.googleusercontent.com';


export const GoogleLogoutButton = () => {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}
