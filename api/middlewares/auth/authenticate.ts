import express from 'express';
import { googleJwtVerifier } from './googleJwtVerifier';

export const authenticate = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authHeader = req.headers.authorization;
    const bearerToken = req.headers.authorization?.split(' ');

    if(authHeader === undefined || bearerToken === undefined || bearerToken.length <= 1) {
        res.status(401).json({message: 'UNAUTHORIZED'});
        return;
    }

    let user;
    try {
        // @TODO: implement the logic for other auth providers
      user = await googleJwtVerifier(bearerToken[1]);
    } catch(e){
        res.status(401).json({message: 'UNAUTHORIZED ACCESS'});
    }

    if(user !== undefined){
        req.body.user = user;
        next();
    }

};