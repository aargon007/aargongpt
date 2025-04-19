import { Secret } from 'jsonwebtoken';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            OPENAI_API_KEY: string;
            TOKEN_SECRET: Secret;
            NEXT_PUBLIC_NODE: string;
            SALT_ROUND: number;
            EXPIRES_IN:number;
            DATABASE_URL: string;
            DIRECT_URL: string;
        }
    }
}