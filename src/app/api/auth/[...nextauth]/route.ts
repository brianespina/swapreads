import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    secret: "this is my secret",
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials): Promise<any> {
                try {
                    //@ts-ignore
                    const { username, password } = credentials
                    const user = await db.user.findUnique({
                        where: {
                            email: username
                        }
                    })
                    //if user exists check password
                    if (!user) {
                        throw new Error("Email does not exsist")
                    }
                    //compare password
                    const isMatch = await compare(password, user.password)
                    if (!isMatch) {
                        throw new Error("Wrong Password")
                    }
                    //return user
                    return {
                        user: user.email
                    }
                } catch (error) {
                    console.log(error)
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        })]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
