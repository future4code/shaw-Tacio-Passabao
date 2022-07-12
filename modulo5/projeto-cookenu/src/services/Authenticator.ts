import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { USER_ROLES } from '../entities/User';

export interface AuthenticationData {
    id: string;
    role: USER_ROLES;
}

export class Authenticator {
    generateToken = (payload: AuthenticationData) => {
        let token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            { expiresIn: '1h' }
        );
        return token;
    }

    getTokenData = (token: string): AuthenticationData => {
        let data = jwt.verify(token, process.env.JWT_KEY as string) as any;
        return data as AuthenticationData;
    }
}