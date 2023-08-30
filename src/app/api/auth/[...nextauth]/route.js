import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    // provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (
          credentials.username === "johndoe" &&
          credentials.password === "demo"
        ) {
          const user = {
            userName: "johndoe",
            displayName: "John Doe",
          };
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],

  // routes for custom auth pages
  pages: {
    signIn: "/auth/signin",
    // error: "/auth/error", // Error code passed in query string as ?error=
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      //   if (url.startsWith("/")) return `${baseUrl}${url}`
      //   // Allows callback URLs on the same origin
      //   else if (new URL(url).origin === baseUrl) return url
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
