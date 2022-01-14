
import { OAuth2Client } from  'google-auth-library';
import { IUser } from '../../models/user';

export const googleJwtVerifier = async(idToken: string): Promise<IUser | undefined> =>{
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID_IHUB_WEB);
    let ticket = await client.verifyIdToken({
            idToken: idToken,
            audience: process.env.GOOGLE_CLIENT_ID_IHUB_WEB,
        });

    const payload = ticket?.getPayload();
    if(!payload) {
        return;
    }

    const user: IUser = {
        userId: payload['sub']
    }
    return user;
}
