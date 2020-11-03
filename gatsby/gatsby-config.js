import dotenv from 'dotenv'

dotenv.config({
	path: '.env',
})

console.log(process.env.SANITY_PROJECT_ID)

module.exports = {
	pathPrefix: '/projects',
	siteMetadata: {
		title: `Nick Mwangemi Web Dev Portfolio`,
		siteUrl: `https://nickmwangemi.github.io`,
		description: `Web Developer portfolio`,
	},
	plugins: [
		'gatsby-plugin-styled-components',
		{
			//Name of plugin being added
			resolve: 'gatsby-source-sanity',
			options: {
				projectId: 'm15bthog',
				dataset: 'production',
				watchMode: true,
				token: process.env.SANITY_TOKEN,
			},
		},
	],
}
