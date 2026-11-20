export interface Project {
	icon?: string;
	name: string;
	description: string;
	url?: string;
	repo?: string;
	tags?: string[];
}

export const projects: Project[] = [
	{
		icon: "🏠",
		name: "Landing Page",
		description: "This page. Whatever.",
		repo: "https://github.com/spavat/landing-page",
		tags: ["Astro", "Tailwind", "shadcn"],
	},
	{
		icon: "📊",
		name: "Personal Tracker",
		description: "Life Tracker - Started as Markdown files, now a full stack web application. But mostly private stuff.",
		url: "https://tracker.spvt.fr",
		repo: "https://github.com/spavat/personal-tracker",
		tags: ["Node.js", "Nest.js", "PostgreSQL", "MongoDB", "TypeScript", "React", "Tanstack"],
	},
	{
		icon: "🎭",
		name: "London Theatre Planner",
		description: "A simple web application for planning my trip to London.",
		url: "https://london-theatre-planner.spvt.fr/",
		repo: "https://github.com/spavat/london-theatre-planner",
		tags: ["Astro", "TypeScript", "React", "Tailwind", "SQLite"],
	},
];
