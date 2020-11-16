import React, { useState } from 'react'
import styled from 'styled-components'
import useInterval from '../lib/useInterval'

const TagLine = styled.p`
	font-family: monospace;
	margin-top: 50px;
	margin-bottom: 50px;
	text-align: center;
`

const HomePage = () => {
	const [text, setText] = useState('APIs')
	const [count, setCount] = useState(0)

	const topics = ['web apps', 'mobile apps', 'desktop apps', 'applications 🙌']

	useInterval(() => {
		if (count < topics.length) {
			setText(topics[count])
		}
		setCount(count + 1)
	}, 1500)

	return (
		<>
			<TagLine>
				Hello, I'm Nick Mwangemi. A Web Developer based in Nairobi, Kenya. I
				like to work with JavaScript and Python but I am open to learning new
				things.
			</TagLine>
			<TagLine>I use JavaScript and Python to build {text}</TagLine>
		</>
	)
}

export default HomePage
