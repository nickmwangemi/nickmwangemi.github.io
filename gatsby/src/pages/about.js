import { graphql, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const PersonStyles = styled.div`
	display: grid;
	/* Take your row sizing not from the ProjectStyles div, but from the ProjectGridStyles
	*/
	@supports not (grid-template-rows: subgrid) {
		--rows: auto auto 1fr;
	}
	grid-template-rows: var(--rows, subgrid);
	// grid-row: span 3;
	// grid-gap: 1rem;
	h2,
	p {
		margin: 0;
	}
`
const Name = styled.h2`
	font-size: 1.5em;
	text-align: center;
	color: black;
`

const Description = styled.div`
	font-size: 1.5em;
	text-align: center;
	color: black;
	margin-top: 20px;
`

function SinglePerson({ person }) {
	return (
		<PersonStyles>
			{/* <Img fluid={person.image.asset.fluid}></Img> */}
			<Name className='mark'>About {person.name}</Name>

			<Description>{person.description}</Description>
		</PersonStyles>
	)
}

const AboutPage = ({ data }) => {
	const persons = data.person.nodes

	console.log(persons)

	return (
		<>
			{persons.map((person) => (
				<SinglePerson key={person.id} person={person} />
			))}
		</>
	)
}

export default AboutPage

export const query = graphql`
	query {
		person: allSanityPerson {
			nodes {
				image {
					asset {
						fluid(maxHeight: 10, maxWidth: 10) {
							src
							...GatsbySanityImageFluid
						}
					}
				}
				name
				description
				id
			}
		}
	}
`
