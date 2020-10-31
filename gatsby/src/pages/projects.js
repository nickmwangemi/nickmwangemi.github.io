import { graphql } from 'gatsby'
import React from 'react'
import ProjectList from '../components/ProjectList'

const ProjectsPage = ({ data }) => {
	const projects = data.projects.nodes
	return (
		<>
			<ProjectList projects={projects} />
		</>
	)
}

export default ProjectsPage

export const query = graphql`
	query projectQuery {
		projects: allSanityProject {
			nodes {
				name
				id
				link
				image {
					asset {
						fluid(maxWidth: 400) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
	}
`
