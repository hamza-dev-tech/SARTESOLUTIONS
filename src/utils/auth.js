import GoogleProvider from "next-auth/providers/google";

import { getServerSession } from "next-auth";
import prisma from "./connect";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
