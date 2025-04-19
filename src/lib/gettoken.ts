"use server"

import { User } from '@prisma/client';
import { type JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { verifyToken } from './jwt';

export type TokenPayload = { user: User } & JwtPayload;

export default async function gettoken(): Promise<TokenPayload | null> {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('aargon');

        if (!token || !token.value) {
            return null;
        }

        const data = verifyToken<TokenPayload>(token.value);

        if (!data?.id) {
            return null;
        }

        return data;
    } catch (error) {
        console.error('Error verifying token:', error);
        return null;
    }
}