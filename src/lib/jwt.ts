import jwt from 'jsonwebtoken';
import { config } from './config';

const JWT_SECRET = config.token_secret;
if (!JWT_SECRET)
    throw new Error('TOKEN_SECRET is not set in environment variables.');

export function createToken(payload: object) {
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: "30d"//config.expires_in, //30d
    });

    return token;
}

export function verifyToken<T>(token: string): T | null {
    try {
        return jwt.verify(token, JWT_SECRET) as T;
    } catch (error) {
        console.error('JWT verification failed:', error);
        return null;
    }
}
