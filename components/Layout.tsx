import React, { Children, ReactNode } from 'react'
import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  Stack,
  IconButton,
  Box,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import { css } from '@emotion/react'
import Link from 'next/link'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { AiOutlineShoppingCart } from 'react-icons/ai'
// import { Avatar, Badge } from 'antd'

const Links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Contact Us',
    path: '/contact-us',
  },
  {
    name: 'About Us',
    path: '/about-us',
  },
  {
    name: 'Login',
    path: '/login',
  },
]

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
)

function Layout({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Stack backgroundColor="#9dfaf7">
      <chakra.header id="header">
        <Flex w="100%" px="6" py="5" align="center" justify="space-between">
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Image src={'/logo.png'} h="50px" />

          <HStack as="nav" spacing="5" display={{ base: 'none', md: 'flex' }}>
            <Link href="/">
              <Button variant="nav"> Home </Button>
            </Link>
            <Link href="/about-us">
              <Button variant="nav"> About us </Button>
            </Link>
            <Link href="/contact-us">
              <Button variant="nav"> Contact us </Button>
            </Link>
            <Link href="/login">
              <Button variant="nav"> Login </Button>
            </Link>
          </HStack>

          <HStack>
            {/* <Badge
              count={5}
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                backgroundColor: '#e01709',
              }}
            >
              <Avatar
                shape="square"
                size="large"
                style={{ backgroundColor: '#e01709' }}
              >
                <AiOutlineShoppingCart />
              </Avatar>
            </Badge> */}
            <IconButton
              css={css`
                position: relative !important;
              `}
              py={'2'}
              colorScheme={'#9dfaf7'}
              color="black"
              aria-label={'Notifications'}
              size={'lg'}
              icon={
                <>
                  <AiOutlineShoppingCart color={'gray.750'} />
                  <Box
                    as={'span'}
                    color={'white'}
                    position={'absolute'}
                    top={'6px'}
                    right={'4px'}
                    fontSize={'0.7rem'}
                    bgColor={'red'}
                    borderRadius={'10px'}
                    zIndex={9999}
                    p={'1px'}
                  >
                    {5}
                  </Box>
                </>
              }
            />
          </HStack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </chakra.header>
      {children}
    </Stack>
  )
}

export default Layout
