"use server"

import { cookies } from 'next/headers'

export async function serverLogin(){
    cookies().set("user_email", "paris.perez.s@gmail.com", {
        maxAge: 60 * 60 * 24 * 7 // 7 dias
    })
}

export async function serverLogout(){
    cookies().delete("user_email")
}