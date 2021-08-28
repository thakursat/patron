import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import Models from "../../../models";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.googleClientId,
      clientSecret: process.env.googleClientSecret,
    }),
  ],
 
  // database: process.env.mongodburl,
});
