import { useEffect, useState } from 'react';
import { HoverEffect } from './card-hover-effect';
import { fetchTags } from '@/app/actions';
import { WithId } from 'mongodb';

export function CardHoverEffectDemo() {
	const [data, setData] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function load() {
			const data = await fetchTags();
			setData(data);
		}
		load();
	});

	return (
		<div className="max-w-5xl mx-auto px-2">
			<HoverEffect items={projects} />
		</div>
	);
}

export const projects = [
	{
		title: 'AI/ML',
		description: "Facebook's mission of bringing the world closer together.",
		link: 'https://meta.com',
	},
	{
		title: 'Cancer',
		description: 'A multinational technology company focusing on e-commerce.',
		link: 'https://amazon.com',
	},
	{
		title: 'Computer networks',
		description: 'Personal computers, and related services.',
		link: 'https://microsoft.com',
	},
];
