import { NextResponse } from "next/server";

import { prisma } from "~/lib/prisma";

export async function GET(req: Request) {
	const users = await prisma.user.findMany({
		select: {
			id: true,
			name: true,
			age: true,
			bio: true,
			image: true,
			email: true,
		},
	});
	console.log(users);

	return NextResponse.json(users);
}
