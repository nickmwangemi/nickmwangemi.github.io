import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ProjectGrid = styled.div`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`
// const ProjectName = styled.h3`
// 	padding: 15px 15px;
// 	text-align: center;
// 	background: var(--yellow);
// `
const ProjectDescription = styled.div`
	margin-top: 35px;
	font-family: monospace;
	font-size: 16px;
`

const SingleProjectPage = ({ data: { project } }) => {
	console.log(project)
	return (
		<div>
			<div>
				<Link to='/projects/'>Back to Projects</Link>
			</div>
			<br />
			<div>
				<h2 className='mark'>{project.name}</h2>
			</div>

			<ProjectGrid>
				<Img fluid={project.image.asset.fluid}></Img>
				<div>
					<ProjectDescription>{project.projectdescription}</ProjectDescription>

					<ul>
						<li>
							<a href={project.livepreview} target='_blank'>
								Live Preview
							</a>
						</li>
						<li>
							<a href={project.codepreview} target='_blank'>
								Code Preview
							</a>
						</li>
					</ul>
				</div>
				<div></div>
			</ProjectGrid>
		</div>
	)
}

export default SingleProjectPage

// Nees to be dynamic based on slug passed in via context in gatsby-node.js
export const query = graphql`
	query($slug: String!) {
		project: sanityProject(slug: { current: { eq: $slug } }) {
			name
			livepreview
			codepreview
			projectdescription
			image {
				asset {
					fluid(maxWidth: 800) {
						...GatsbySanityImageFluid
					}
				}
			}
		}
	}
`
