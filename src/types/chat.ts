import { UIMessage, type UIMessagePart } from "ai";

export type TMessage =  UIMessage & {
    createdAt?: string;
}