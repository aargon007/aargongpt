"use server"

import prisma from "@/lib/prisma"
import { hash } from "bcrypt"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"
import { createToken } from "@/lib/jwt"
import { config } from "@/lib/config"

export async function createUser(formData: FormData) {
    try {
        const email = formData.get("email") as string
        const password = formData.get("password") as string
        const firstName = formData.get("firstName") as string
        const lastName = formData.get("lastName") as string

        const existingUser = await prisma.user.findUnique({ where: { email } })
        if (existingUser) {
            return {
                success: false,
                error: "Email already in use. Please log in or use another.",
            }
        }

        const hashedPassword = await hash(password, Number(config.salt_round));

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                first_name: firstName,
                last_name: lastName,
            },
        })

        const token = createToken({
            id: user.id,
            email: user.email,
            name: `${user.first_name} ${user.last_name ?? ""}`.trim(),
        })

        const cookieStore = await cookies()
        cookieStore.set("aargon", token, {
            httpOnly: true,
            maxAge: config.expires_in, // 30 days
            path: "/",
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        });

    } catch (error) {
        console.error("User creation failed:", error)
        return {
            success: false,
            error: "Something went wrong. Please try again later.",
        }
    }
    
    redirect("/chat")
}
