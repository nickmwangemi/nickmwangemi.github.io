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
			name: 'link',
			title: 'Project Link',
			type: 'string',
			description: 'Hosted link to the project',
		},
	],
}
