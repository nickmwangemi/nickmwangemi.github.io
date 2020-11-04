import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
	text-align: center;
`

const Footer = () => {
	return (
		<FooterStyles>
			<p>&copy; Nick Mwangemi {new Date().getFullYear()}</p>
		</FooterStyles>
	)
}

export default Footer
