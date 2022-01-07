import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import GoogleIcon from '@mui/icons-material/Google';
import { refreshTokenSetup } from '../Utils/refreshToken';
import { Button } from '@material-ui/core';
import { useStyles } from './GoogleLoginButton.styles';

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

export const GoogleLoginButton = (props: any) => {
  const classes = useStyles();

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    refreshTokenSetup(res as GoogleLoginResponse);
    props.onLoginSuccess();
  };

  const onFailure = (res: any) => {
    console.log('Login failed', res);
  };

  return(
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <Button
          fullWidth
          className={classes.googleButton}
          color="primary"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          startIcon={<GoogleIcon />}
          variant="contained">
          Sign in with Google
        </Button>
      )}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      icon={true}
    />
)
}
