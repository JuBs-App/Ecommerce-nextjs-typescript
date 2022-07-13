import React, { Children } from 'react'
import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  Stack,
  Badge,
} from '@chakra-ui/react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack>
      <chakra.header id="header">
        <Flex w="100%" px="6" py="5" align="center" justify="space-between">
          <Image src={'/logo.png'} h="50px" />

          <HStack as="nav" spacing="5">
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
            <Badge color="secondary">
              <AiOutlineShoppingCart />
            </Badge>
          </HStack>
        </Flex>
      </chakra.header>
      {children}
    </Stack>
  )
}

export default Layout
