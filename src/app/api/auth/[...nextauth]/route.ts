import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const providers = [
    GithubProvider({
        clientId: process.env.GITHUB_CLIENTID,
        clientSecret: process.env.GITHUB_CLIENTSECRET
    })
]

const handler = NextAuth({
    secret: "this is my secret",
    providers,
})

export {handler as GET, handler as POST}
