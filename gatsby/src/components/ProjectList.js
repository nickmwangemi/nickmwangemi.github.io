import { Link } from 'gatsby'
import React from 'react'

function SingleProject({ project }) {
	return (
		<>
			<Link to={`/projects/${project.id}`}>
				<h2>
					<span className='mark'>{project.name}</span>
				</h2>
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
