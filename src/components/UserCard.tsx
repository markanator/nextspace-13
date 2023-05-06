/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./UserCard.module.css";

interface Props {
	id: string;
	name: string | null;
	age: number | null;
	image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
	return (
		<div className="bg-gray-300 p-0 w-36">
			<img
				src={image ?? "/mememan.webp"}
				alt={`${name}'s profile`}
				className="w-36 h-28 object-cover mb-1"
			/>
			<div className="px-1">
				<h3 className="mt-0 mb-4 text-blue-500 font-bold">
					<Link href={`/users/${id}`}>{name}</Link>
				</h3>
				<p>Age: {age}</p>
			</div>
		</div>
	);
}
