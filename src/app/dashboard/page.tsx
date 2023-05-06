import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { SignOutButton } from "~/components/Buttons";
import { authOptions } from "~/lib/auth";
import { prisma } from "~/lib/prisma";
import { ProfileForm } from "./ProfileForm";

export default async function Dashboard() {
	const session = await getServerSession(authOptions);

	if (!session || !session.user || !session.user.email) {
		redirect("/api/auth/signin");
	}

	const currentUserEmail = session?.user?.email || "";
	const user = await prisma.user.findUnique({
		where: {
			email: currentUserEmail,
		},
	});

	if (!user) {
		throw new Error("User not found");
	}

	return (
		<div className="container max-w-7xl mx-auto py-10">
			<div className="flex gap-4 mb-4">
				<h1 className="text-2xl font-bold m-3">Dashboard</h1>
				<SignOutButton />
			</div>
			<ProfileForm user={user} />
		</div>
	);
}
