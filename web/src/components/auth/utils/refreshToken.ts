import { GoogleLoginResponse } from "react-google-login";

export const refreshTokenSetup = (res: GoogleLoginResponse) => {
  let refreshAfter = (res.tokenObj?.expires_in || 3600 - 5 * 60) * 1000;
  localStorage.setItem('authToken', res.getAuthResponse().id_token);

    const refreshToken = async () => {
      const newAuthRes = await res.reloadAuthResponse();
      refreshAfter = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
      localStorage.setItem('authToken', newAuthRes.id_token);
      setTimeout(refreshToken, refreshAfter);
    };
  
    setTimeout(refreshToken, refreshAfter);
  };
  