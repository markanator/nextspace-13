import { getServerSession } from "next-auth";
import { prisma } from "~/lib/prisma";
import FollowClient from "./FollowClient";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";

interface Props {
	targetUserId: string;
}

export default async function FollowButton({ targetUserId }: Props) {
	const session = await getServerSession({
		adapter: PrismaAdapter(prisma),
		providers: [
			GithubProvider({
				clientId: process.env.GITHUB_ID!,
				clientSecret: process.env.GITHUB_SECRET!,
			}),
		],
	});

	const currentUserId = await prisma.user
		.findFirst({ where: { email: session?.user?.email! } })
		.then((user) => user?.id!);

	// const isFollowing = await prisma.follows.findFirst({
	// 	where: { followerId: currentUserId, followingId: targetUserId },
	// });

	return <FollowClient targetUserId={targetUserId} isFollowing={false} />;
}
