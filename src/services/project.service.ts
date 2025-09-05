"use server";

import prisma from "@/lib/prisma";
import { TResponse } from "@/types/response";
import { revalidatePath } from "next/cache";

// create project
export async function createProject(formData: FormData): Promise<TResponse> {
    try {
        const name = formData.get('name') as string;
        const color = formData.get('color') as string;

        const project = await prisma.project.create({
            data: {
                name,
                color,
            },
        });

        revalidatePath('/chat');

        return {
            success: true,
            message: 'Project created successfully.',
            data: project,
        };
    } catch (error) {
        return {
            success: false,
            message: 'Failed to create project.',
        };
    }
}


// get user all projects
export async function getProjects(): Promise<TResponse> {
    try {
        const projects = await prisma.project.findMany({
            select: {
                id: true,
                name: true,
                color: true,
            },
            orderBy: {
                name: 'asc',
            },
        });
        return {
            success: true,
            message: 'Projects loaded successfully.',
            data: projects,
        };
    } catch (error) {
        return {
            success: false,
            message: 'Failed to load projects.',
        };
    }
}