"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return <>...</>;
	}

	if (status === "authenticated") {
		return (
			<>
				<Link href={`/dashboard`} className="mx-2 flex items-center justify-center">
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
	return (
		<button
			onClick={() => signOut()}
			className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
		>
			Sign out
		</button>
	);
}
