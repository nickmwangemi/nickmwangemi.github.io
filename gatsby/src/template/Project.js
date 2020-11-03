import React from 'react'
import { graphql } from 'gatsby'

const SingleProjectPage = () => {
	return <p>Single Project</p>
}

export default SingleProjectPage

// Nees to be dynamic based on slug passed in via context in gatsby-node.js
export const query = graphql`
	query($slug: String!) {
		project: sanityProject(slug: { current: { eq: $slug } }) {
			name
			id
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
