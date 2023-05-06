"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
	const { data: session, status } = useSession();
	console.log(session, status);

	if (status === "loading") {
		return <>...</>;
	}

	if (status === "authenticated") {
		return (
			<>
				<Link href={`/dashboard`} className="mx-2">
					<Image
						src={session.user?.image ?? "/mememan.webp"}
						width={32}
						height={32}
						alt="Your Name"
						className="rounded-full"
					/>
				</Link>
				<SignOutButton />
			</>
		);
	}

	return <button onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
	return <button onClick={() => signOut()}>Sign out</button>;
}
