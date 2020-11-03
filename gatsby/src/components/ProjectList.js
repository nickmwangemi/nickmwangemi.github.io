import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

function SingleProject({ project }) {
	return (
		<>
			<Link to={`/projects/${project.id}`}>
				<h2>
					<span className='mark'>{project.name}</span>
				</h2>
				<Img fluid={project.image.asset.fluid} alt={project.name} />
			</Link>
		</>
	)
}

const ProjectList = ({ projects }) => {
	return (
		<div>
			{projects.map((project) => (
				<SingleProject key={project.id} project={project} />
			))}
		</div>
	)
}

export default ProjectList
