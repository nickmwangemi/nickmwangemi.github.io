import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function PersonPage({ data: { person } }) {
	console.log(person)
	return <p>Hey</p>
}

export const query = graphql`
	query {
		person: sanityPerson {
			name
			slug {
				current
			}
			image {
				asset {
					title
					url
				}
			}
			description
		}
	}
`
