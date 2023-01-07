import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { chakra, Flex, Spinner, useDisclosure } from '@chakra-ui/react'
import Unauthorized from 'components/unauthorized'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'

const AppLayout = (props) => {
	return props.children
}

export default AppLayout
