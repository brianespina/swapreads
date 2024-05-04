import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [
    CredentialsProvider({
        credentials: {
            username: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
        },
        async authorize(credentials):Promise<any> {
            console.log(credentials)
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
    }),
];

const handler = NextAuth({
    secret: "this is my secret",
    providers,
});

export { handler as GET, handler as POST };
