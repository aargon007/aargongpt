import { UIMessage } from "ai";

export type TMessage = UIMessage & {
    createdAt?: string;
};

export type TMessagePart = {
    id?: string;
    type: string; // Allow any type to be flexible with AI SDK types
    text?: string;
    image?: string;
    data?: any;
    [key: string]: any; // Allow additional properties
};