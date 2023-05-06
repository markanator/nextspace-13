import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
	],
};
