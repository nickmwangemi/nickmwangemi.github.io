import { DiCodeBadge as icon } from 'react-icons/di'
export default {
	// Computer Name
	name: 'project',
	// Visible title
	title: 'Projects',
	type: 'document',
	icon: icon,
	fields: [
		{
			name: 'name',
			title: 'Project Name',
			type: 'string',
			description: 'Name of the project',
		},
		{
			name: 'slug',
			title: 'slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 100,
			},
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'livepreview',
			title: 'Project Preview Link',
			type: 'string',
			description: 'Link to the hosted project',
		},
		{
			name: 'codepreview',
			title: 'Code Repository Link',
			type: 'string',
			description: "Link to the project's code repository",
		},
		{
			name: 'projectdescription',
			title: 'Project Description',
			type: 'text',
			description: 'Tell us about the project',
		},
		{
			name: 'techandtools',
			title: 'Technology and Tools Used',
			type: 'string',
			description: 'Mention the technology and tools used',
		},
	],
}
