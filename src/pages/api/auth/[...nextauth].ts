import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "ユーザ名", type: "text" },
        password: { label: "パスワード", type: "password" },
      },
      async authorize(credentials) {
        const realUser = { id: "1", name: "AdminUser", email: "admin@example.com", role: "admin", backendToken: "token123" };

        if (credentials?.username === realUser.name && credentials?.password === "password") {
          return realUser; // ユーザー情報を返す
        }
        return null;
      },
    }),
  ],
  // adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.backendToken = user.backendToken;
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.backendToken = token.backendToken;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
