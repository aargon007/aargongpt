'use server';

import { config } from '@/lib/config';
import gettoken from '@/lib/gettoken';
import { createToken } from '@/lib/jwt';
import prisma from '@/lib/prisma';
import { TResponse } from '@/types/response';
import { User } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import { cookies } from 'next/headers';

export async function createUser(formData: FormData): Promise<TResponse> {
    try {
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return {
                success: false,
                message: 'Email already in use. Please log in or use another.',
            };
        }

        const hashedPassword = await hash(password, Number(config.salt_round));

        const user = await prisma.user.create({
            data: {
                first_name: firstName,
                last_name: lastName,
                email,
                password: hashedPassword,
            },
        });

        const token = createToken({
            id: user.id,
            email: user.email,
            name: `${user.first_name} ${user.last_name ?? ''}`.trim(),
        });

        const cookieStore = await cookies();
        cookieStore.set('aargon', token, {
            httpOnly: true,
            maxAge: config.expires_in, // 30 days
            path: '/',
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
        });

        return {
            success: true,
            message: 'User created successfully.',
        };
    } catch (error) {
        console.error('User creation failed:', error);
        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
        };
    }
}

// login
export async function loginUser(formData: FormData): Promise<TResponse> {
    try {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        // Validate input
        if (!email || !password) {
            return {
                success: false,
                message: 'Email and password are required.',
            };
        }

        // Only select necessary fields for login
        const user = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                password: true,
                first_name: true,
                last_name: true,
            }
        });

        if (!user) {
            return {
                success: false,
                message: 'User not found.',
            };
        }

        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) {
            return {
                success: false,
                message: 'Invalid password.',
            };
        }

        const token = createToken({
            id: user.id,
            email: user.email,
            name: `${user.first_name} ${user.last_name ?? ''}`.trim(),
        });

        const cookieStore = await cookies();
        cookieStore.set('aargon', token, {
            httpOnly: true,
            maxAge: config.expires_in, // 30 days
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
        });

        return {
            success: true,
            message: 'Login successful.',
        };
    } catch (error) {
        console.error('Login failed:', error);
        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
        };
    }
}

// get user from token
export async function getUser(): Promise<User | null> {
    try {
        const payload = await gettoken();

        if (!payload?.id) {
            return null;
        }

        const user = await prisma.user.findUnique({
            where: { id: payload.id },
            select: {
                id: true,
                email: true,
                first_name: true,
                last_name: true,
                image: true,
                created_at: true,
                updated_at: true,
            }
        });

        return user as User;
        
    } catch (error) {
        console.error('Error getting user from token:', error);
        return null;
    }
}
