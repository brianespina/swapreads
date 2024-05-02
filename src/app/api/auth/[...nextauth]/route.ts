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
    async authorize(credentials, req) {
      const { email, password } = credentials as {
        username: string;
        password: string;
      };
    },
  }),

  GithubProvider({
    clientId: process.env.GITHUB_CLIENTID,
    clientSecret: process.env.GITHUB_CLIENTSECRET,
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
