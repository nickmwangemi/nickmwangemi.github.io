import path from 'path'

async function turnProjectsIntoPages({ graphql, actions }) {
	// 1. Get a template for this page
	const projectTemplate = path.resolve('./src/template/Project.js')
	// 2. Query all projects
	const { data } = await graphql(`
		query {
			projects: allSanityProject {
				nodes {
					name
					slug {
						current
					}
				}
			}
		}
	`)

	// 3. Loop over each project and create a page for that project
	data.projects.nodes.forEach((project) => {
		actions.createPage({
			// What is the URL for this new page?
			path: `projects/${project.slug.current}`,
			component: projectTemplate,
			context: {
				Nick: 'is awesome',
				slug: project.slug.current,
			},
		})
	})
}
export async function createPages(params) {
	// Create pages dynamically
	// 1. Projects
	await turnProjectsIntoPages(params)
	// 2. Persons
}
