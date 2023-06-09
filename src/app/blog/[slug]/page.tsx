interface Post {
	title: string;
	content: string;
	slug: string;
}

// export async function generateStaticParams() {
// 	const posts: Post[] = await fetch(`${process.env.NEXTAUTH_URL!}/api/content`).then((res) =>
// 		res.json()
// 	);

// 	return posts.map((post) => ({
// 		slug: post.slug,
// 	}));
// }

interface Props {
	params: {
		slug: string;
	};
}

export default async function PostPage({ params }: Props) {
	const posts: Post[] = await fetch(`${process.env.NEXTAUTH_URL!}/api/content`).then((res) =>
		res.json()
	);
	const post = posts.find((post) => post.slug === params.slug)!;
	return (
		<>
			<h1>{post.title}</h1>
			<div>{post.content}</div>
		</>
	);
}
