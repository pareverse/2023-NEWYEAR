import { useRef, useEffect } from 'react'
import { chakra, Flex, keyframes, Text, usePrefersReducedMotion } from '@chakra-ui/react'
import Fireworks from 'fireworks-js'

const wave = keyframes`
	from {
		background-position: 0;
	}
	to {
		background-position: 648px;
	}
`

const HappyNewYear = () => {
	const canvas = useRef(null)
	const prefersReducedMotion = usePrefersReducedMotion()
	const animation = prefersReducedMotion ? undefined : `${wave} 3s linear infinite`

	useEffect(() => {
		const fireworks = new Fireworks(canvas.current, {
			autoresize: true,
			opacity: 0.5,
			acceleration: 1.05,
			friction: 0.97,
			gravity: 1.5,
			particles: 200,
			traceLength: 3,
			traceSpeed: 10,
			explosion: 5,
			intensity: 30,
			flickering: 50,
			lineStyle: 'round'
		})

		fireworks.start()
	}, [])

	return (
		<>
			<Flex position="absolute" justify="center" align="center" h="100vh" w="full" zIndex={1}>
				<Flex direction="column" align="center">
					<Text style={{ background: 'linear-gradient(to right,  #FDEFF9, #7303C0, #EC38BC, #FDEFF9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} fontSize={256} fontWeight="bold" color="white" animation={animation}>
						2023
					</Text>

					<Text mt={-8} fontSize={32} fontWeight="medium" letterSpacing={12} color="white">
						HAPPY NEW YEAR
					</Text>
				</Flex>
			</Flex>

			<chakra.div bg="black" position="fixed" h="100vh" w="full" ref={canvas} />
		</>
	)
}

export default HappyNewYear
