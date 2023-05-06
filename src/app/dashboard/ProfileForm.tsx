"use client";

export function ProfileForm({ user }: any) {
	const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const body = {
			name: formData.get("name"),
			bio: formData.get("bio"),
			age: formData.get("age"),
			image: formData.get("image"),
		};

		const res = await fetch("/api/user", {
			method: "PUT",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		});

		await res.json();
	};

	return (
		<div className="border-t border-gray-200 py-2">
			<h2 className="text-xl font-semibold">Edit Your Profile</h2>
			<form onSubmit={updateUser}>
				<label className="block" htmlFor="name">
					<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
						Name
					</span>
					<input
						type="text"
						name="name"
						defaultValue={user?.name ?? ""}
						className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					/>
				</label>
				<label className="block" htmlFor="bio">
					<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
						Bio
					</span>
					<textarea
						name="bio"
						cols={30}
						rows={10}
						defaultValue={user?.bio ?? ""}
						className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					></textarea>
				</label>
				<label className="block" htmlFor="age">
					<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
						Age
					</span>
					<input
						type="text"
						name="age"
						defaultValue={user?.age ?? 0}
						className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					/>
				</label>
				<label className="block" htmlFor="image">
					<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
						Profile Image URL
					</span>
					<input
						type="text"
						name="image"
						defaultValue={user?.image ?? ""}
						className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
					/>
				</label>

				<div className="my-2">
					<button
						type="submit"
						className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	);
}
